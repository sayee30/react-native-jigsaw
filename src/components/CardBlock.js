import React from "react";
import { View, Text } from "react-native";
import Image from "./Image";
import Card from "./Card";
import Elevation from "./Elevation";
import { withTheme } from "../core/theming";
import {
  GROUPS,
  COMPONENT_TYPES,
  FORM_TYPES,
  createElevationType,
} from "../core/component-types";
import Config from "./Config";

class CardBlock extends React.PureComponent {
  static defaultProps = {
    image: Config.cardImageUrl,
    aspectRatio: 1.5,
    elevation: 2,
    numColumns: 3,
  };

  render() {
    const {
      image,
      title,
      leftDescription,
      rightDescription,
      titleCentered,
      aspectRatio,
      elevation,
      numColumns,
      theme: { colors, borderRadius, typography, spacing },
      style,
      onPress,
    } = this.props;

    let titleJustification, titleStyle;
    if (titleCentered && !leftDescription && !rightDescription) {
      titleJustification = "center";
    } else {
      titleJustification = "space-between";
    }

    if (numColumns === 1) {
      titleStyle = typography.button;
    } else if (numColumns === 2) {
      titleStyle = typography.headline6;
    } else {
      titleStyle = typography.headline5;
    }

    const rightDescriptionStyles = [
      typography.subtitle2,
      { color: colors.light },
    ];

    return (
      <Card style={style} onPress={onPress} numColumns={numColumns}>
        <View>
          <Elevation style={{ elevation, borderRadius: borderRadius.global }}>
            <Image
              style={{
                borderRadius: borderRadius.global,
                aspectRatio,
              }}
              source={typeof image === "string" ? { uri: image } : image}
              resizeMode="cover"
            />
          </Elevation>
          {title ? (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: titleJustification,
                marginTop: numColumns === 3 ? spacing.large : spacing.medium,
              }}
            >
              <Text
                numberOfLines={1}
                style={[titleStyle, { color: colors.strong }]}
              >
                {title}
              </Text>
              {!leftDescription && rightDescription ? (
                <Text style={rightDescriptionStyles}>{rightDescription}</Text>
              ) : null}
            </View>
          ) : null}
          {leftDescription ? (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: numColumns === 3 ? spacing.text : spacing.text / 2,
              }}
            >
              <Text
                numberOfLines={1}
                style={[typography.body2, { color: colors.medium }]}
              >
                {leftDescription}
              </Text>
              {rightDescription ? (
                <Text numberOfLines={1} style={rightDescriptionStyles}>
                  {rightDescription}
                </Text>
              ) : null}
            </View>
          ) : null}
        </View>
      </Card>
    );
  }
}

export default withTheme(CardBlock);

const SEED_DATA_PROPS = {
  image: {
    group: GROUPS.data,
    label: "Image",
    description: "Image",
    type: FORM_TYPES.remoteImage,
    value: null,
    editable: true,
  },
  title: {
    group: GROUPS.data,
    label: "Title",
    description: "Text to display",
    type: FORM_TYPES.string,
    value: "Beautiful West Coast Villa",
    editable: true,
  },
  leftDescription: {
    group: GROUPS.data,
    label: "Left description",
    description: "Text to display on the left",
    type: FORM_TYPES.string,
    value: "San Diego",
    editable: true,
  },
  rightDescription: {
    group: GROUPS.data,
    label: "Right description",
    description: "Text to display on the right",
    type: FORM_TYPES.string,
    value: "$100",
    editable: true,
  },
  aspectRatio: {
    group: GROUPS.basic,
    label: "Aspect ratio",
    description: "Aspect ratio of the image",
    type: FORM_TYPES.aspectRatio,
    value: 1.5,
    editable: true,
  },
  titleCentered: {
    group: GROUPS.basic,
    label: "Title centered",
    description: "Whether to center the title",
    type: FORM_TYPES.boolean,
    value: false,
    editable: true,
  },
  elevation: createElevationType(2),
};

export const SEED_DATA = [
  {
    name: "Small Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one third of its container.",
    category: COMPONENT_TYPES.card,
    props: {
      ...SEED_DATA_PROPS,
      numColumns: {
        group: GROUPS.basic,
        type: FORM_TYPES.number,
        value: 1,
        editable: false,
      },
    },
  },
  {
    name: "Medium Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up one half of its container.",
    category: COMPONENT_TYPES.deprecated,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display on the top right",
        type: FORM_TYPES.icon,
        value: null,
        editable: true,
      },
      numColumns: {
        group: GROUPS.basic,
        type: FORM_TYPES.number,
        value: 2,
        editable: false,
      },
    },
  },
  {
    name: "Large Block Card",
    tag: "CardBlock",
    description:
      "An elevated card with a title and description, that takes up the full width its container.",
    category: COMPONENT_TYPES.deprecated,
    props: {
      ...SEED_DATA_PROPS,
      icon: {
        group: GROUPS.basic,
        label: "Icon",
        description: "Icon to display on the top right",
        type: FORM_TYPES.icon,
        value: null,
        editable: true,
      },
      numColumns: {
        group: GROUPS.basic,
        type: FORM_TYPES.number,
        value: 3,
        editable: false,
      },
    },
  },
];

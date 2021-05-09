import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

import {
  GROUPS,
  COMPONENT_TYPES,
  createBoolProp,
  createColorProp,
  createActionProp,
  createNumberProp,
  createIconProp,
} from "../../core/component-types";
import Config from "../Config";
import IconButton from "../IconButton";
import themeT from "../../styles/DefaultTheme";

export type RadioButtonProps = {
  selected: boolean;
  disabled?: boolean;
  color?: string;
  unselectedColor?: string;
  onPress?: () => void;
  theme: typeof themeT;
  style?: StyleProp<ViewStyle>;
  size?: number;
  selectedIcon?: string;
  unselectedIcon?: string;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  selected,
  disabled = false,
  color,
  unselectedColor,
  onPress = () => {},
  style,
  size = Config.radioButtonSize,
  selectedIcon = "MaterialIcons/radio-button-checked",
  unselectedIcon = "MaterialIcons/radio-button-unchecked",
}) => {
  return (
    <IconButton
      style={style}
      icon={selected ? selectedIcon : unselectedIcon}
      color={selected ? color : unselectedColor}
      disabled={disabled}
      onPress={onPress}
      size={size}
    />
  );
};

export default RadioButton;

export const SEED_DATA = {
  name: "Radio Button",
  tag: "RadioButton",
  category: COMPONENT_TYPES.button,
  preview_image_url: "{CLOUDINARY_URL}/Control_Radio.png",
  props: {
    selected: createBoolProp({
      label: "Selected",
      description: "Whether the radio button is selected",
      required: true,
    }),
    color: createColorProp({
      group: GROUPS.basic,
      description: "Color for the button",
      defaultValue: "primary",
    }),
    unselectedColor: createColorProp({
      label: "Unselected Color",
      description: "Unselected Color for the button",
      defaultValue: "primary",
    }),
    disabled: createBoolProp({
      label: "Disabled",
      description: "Whether radio button is disabled",
    }),
    onPress: createActionProp(),
    size: createNumberProp({
      label: "Size",
      description: "Specifies the size of the button",
      defaultValue: Config.radioButtonSize,
    }),
    selectedIcon: createIconProp({
      label: "Selected Icon",
      description: "Icon to show when the radio button is selected",
      defaultValue: "MaterialIcons/radio-button-checked",
    }),
    unselectedIcon: createIconProp({
      label: "Unselected Icon",
      description: "Icon to show when the radio button is unselected",
      defaultValue: "MaterialIcons/radio-button-unchecked",
    }),
  },
  layout: {
    width: 24,
    height: 24,
  },
};

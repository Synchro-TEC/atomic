import React from "react";
import { text, boolean, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { optionalSelect } from "../../../utils/optionalSelect";

import readme from "./README.md";
import Button from "../../../components/Button";

const options = {
  default: "default",
  primary: "primary",
  info: "info",
  warning: "warning",
  danger: "danger",
};
const component = () => (
  <Button
    theme={optionalSelect("Theme", options, "")}
    outline={boolean("Outline", false)}
    full={boolean("Full", false)}
    small={boolean("Small", false)}
    className={text("ClassName", "")}
    style={object("Style", {})}
    onClick={action("button_clicked")}
  >
    My Button
  </Button>
);

export default [readme, component];
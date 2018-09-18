import React from "react";
// import { text, boolean, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { optionalSelect } from "../../../utils/optionalSelect";

import readme from "./README.md";
import LinkButton from "../../../components/LinkButton";

const options = {
  default: "default",
  primary: "primary",
  info: "info",
  warning: "warning",
  danger: "danger",
};

const component = () => (
  <LinkButton
    theme={optionalSelect("Theme", options, "")}
    onClick={action("button_clicked")}
  >
    My Link Button
  </LinkButton>
);

export default [readme, component];
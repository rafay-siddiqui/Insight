import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
}

const Template = args => <Button {...args} />

export const Login = Template.bind({})
Login.args = {
  label: "Login"
}
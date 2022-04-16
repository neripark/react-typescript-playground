import * as React from "react";

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {}

export const RadioButton: React.FC<RadioButtonProps> = props => {
  return <input type="radio" {...props} />;
};

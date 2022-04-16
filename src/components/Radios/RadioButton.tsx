import * as React from "react";
import styles from "./RadioButton.module.css";

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <label className={styles.root}>
      <input type="radio" {...props} />
      <span>{label}</span>
    </label>
  );
};

import * as React from "react";
import styles from "./RadioButton.module.css";

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const RadioButton: React.FC<Props> = ({ label, ...props }) => {
  return (
    // 縦並びと横並び両方に対応させるために空divでラップ
    <div>
      <label className={styles.root}>
        <input type="radio" {...props} />
        <span>{label}</span>
      </label>
    </div>
  );
};

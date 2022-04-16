import * as React from "react";
import styles from "./RadioButtonsGroup.module.css";

interface Props {
  direction: "x" | "y";
}

export const RadioButtonsGroup: React.FC<Props> = props => {
  return (
    <div className={`${styles.root} ${styles[`direction-${props.direction}`]}`}>
      {props.children}
    </div>
  );
};

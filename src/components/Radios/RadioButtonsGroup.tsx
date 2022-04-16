import * as React from "react";
import styles from "./RadioButtonsGroup.module.css";

export const RadioButtonsGroup: React.FC = props => {
  return <div className={styles.root}>{props.children}</div>;
};

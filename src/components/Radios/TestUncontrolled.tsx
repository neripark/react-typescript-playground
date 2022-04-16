import * as React from "react";
import { RadioButton } from "./RadioButton";

export const TestUncontrolled: React.FC = () => {
  return (
    <>
      <RadioButton label="選択肢1" name="questionUncontrolled" />
      <RadioButton label="選択肢2" name="questionUncontrolled" defaultChecked />
      <RadioButton label="選択肢3" name="questionUncontrolled" />
    </>
  );
};

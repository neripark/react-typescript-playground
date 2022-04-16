import * as React from "react";
import { RadioButton } from "./RadioButton";
import { RadioButtonsGroup } from "./RadioButtonsGroup";

type Direction = "x" | "y";

export const TestControlled: React.FC = () => {
  const [checkedRadio, setCheckedRadio] = React.useState<string>("value3");
  const onChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedRadio(e.currentTarget.value);
  };
  const [direction, setDirection] = React.useState<Direction>("x");
  const directionButtonLabel = React.useMemo<string>(() => {
    return direction === "x" ? "縦にする" : "横にする";
  }, [direction]);
  const toggleDirection = () => {
    setDirection(prev => (prev === "x" ? "y" : "x"));
  };

  return (
    <>
      <button
        onClick={toggleDirection}
      >{`方向を${directionButtonLabel}`}</button>
      <p>{`現在選択されているのは: ${checkedRadio}`}</p>
      <RadioButtonsGroup direction={direction}>
        <RadioButton
          label="選択肢1"
          name="questionControlled"
          value="value1"
          onChange={onChangeRadio}
          checked={checkedRadio === "value1"}
        />
        <RadioButton
          label="選択肢2"
          name="questionControlled"
          value="value2"
          onChange={onChangeRadio}
          checked={checkedRadio === "value2"}
        />
        <RadioButton
          label="選択肢3"
          name="questionControlled"
          value="value3"
          onChange={onChangeRadio}
          checked={checkedRadio === "value3"}
        />
      </RadioButtonsGroup>
    </>
  );
};

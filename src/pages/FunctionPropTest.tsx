import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

// _____________________________________
//
interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = props => (
  <button onClick={props.onClick} style={{ marginRight: "15px" }}>
    {props.children}
  </button>
);

// _____________________________________
//
interface ButtonGroupProps {
  data: ButtonProps[];
}

const ButtonGroup: React.FC<ButtonGroupProps> = props => {
  return (
    <>
      {props.data.map((element, index) => (
        <Button key={index} onClick={element.onClick}>
          {`ボタン${index + 1}`}
        </Button>
      ))}
    </>
  );
};

// _____________________________________
//
const generateLogger = (num: number) => {
  return (): void => {
    console.log(`押されたのは ${num} 番目のボタンです。`);
  };
};

const data = [
  { id: 1, text: "晴れ" },
  { id: 2, text: "くもり" },
  { id: 3, text: "雨" },
  { id: 4, text: "雪" }
];

// __________________ page component ___________________
const FunctionPropTest: React.FC<PageProps> = () => {
  const dataForButtonGroup: ButtonProps[] = data.map(element => ({
    onClick: generateLogger(element.id),
    children: element.text
  }));

  return (
    <>
      <h2>FunctionPropTest</h2>
      <p>繰り返し構文の中で動的な関数生成をして大丈夫かを知りたい</p>
      <hr />
      <h3>直接ボタンをRender</h3>
      {data.map((element, index) => (
        <Button key={index} onClick={generateLogger(element.id)}>
          {`ボタン${index + 1}`}
        </Button>
      ))}
      <hr />
      <h3>データを作ってからRender</h3>
      <ButtonGroup data={dataForButtonGroup} />
      <hr />
      <h3>結論：どちらも正常に動く。</h3>
    </>
  );
};

export default FunctionPropTest;

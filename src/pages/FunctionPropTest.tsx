import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

interface Props {
  onClick: () => void;
  children: string;
}

const Button: React.FC<Props> = props => (
  <button onClick={props.onClick} style={{ marginRight: "15px" }}>
    {props.children}
  </button>
);

const generateLogger = (num: number) => {
  return () => console.log(`押されたのは ${num} 番目のボタンです。`);
};

const data = [
  { id: 1, text: "晴れ" },
  { id: 2, text: "くもり" },
  { id: 3, text: "雨" },
  { id: 4, text: "雪" }
];

const FunctionPropTest: React.FC<PageProps> = () => {
  return (
    <>
      <h2>FunctionPropTest</h2>
      <p>繰り返し構文の中で動的な関数生成をして大丈夫かを知りたい</p>
      <hr />
      {data.map((element, index) => (
        <Button key={index} onClick={generateLogger(element.id)}>
          {element.text}
        </Button>
      ))}
    </>
  );
};

export default FunctionPropTest;

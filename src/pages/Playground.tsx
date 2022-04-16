import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TestUncontrolled } from "../components/Radios/TestUncontrolled";
import { TestControlled } from "../components/Radios/TestControlled";
import { TestRawHtml } from "../components/Radios/TestRawHtml";

type PageProps = {} & RouteComponentProps<{}>;

const Playground: React.FC<PageProps> = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <h1>playground page</h1>
      <h2>inptut type text</h2>
      <input type="text" onChange={e => onChange(e)} />
      <hr />
      <h2>radio buttons</h2>
      <h3>非制御で使う</h3>
      <TestUncontrolled />
      <h3>制御で使う</h3>
      <TestControlled />
      <h2>radio buttons by raw html</h2>
      <TestRawHtml />
    </>
  );
};

export default Playground;

import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { RadioButton } from "../components/Radios";

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
      <RadioButton />
      <h2>radio buttons by raw html</h2>
      <RawRadioButtons />
    </>
  );
};

const RawRadioButtons: React.FC = () => {
  return (
    <>
      <div>
        <label>
          <input type="radio" name="question1" value="answer1" />
          <span>回答1</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="question1" value="answer2" />
          <span>回答2</span>
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="question1" value="answer3" />
          <span>回答3</span>
        </label>
      </div>
    </>
  );
};

export default Playground;

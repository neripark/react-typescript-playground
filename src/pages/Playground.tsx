import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

const Playground: React.FC<PageProps> = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }
  return (
    <>
      <h1>playground page</h1>
      <input
        type="text"
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default Playground;

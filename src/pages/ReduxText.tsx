import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

const ReduxText: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Redux text.</h1>
    </>
  );
};

export default ReduxText;

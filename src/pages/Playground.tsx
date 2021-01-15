import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

const Playground: React.FC<PageProps> = () => {
  return (
    <>
      <h1>playground page</h1>
    </>
  );
};

const FancyButton: React.FC = ({ children }) => <button>{children}</button>;

export default Playground;

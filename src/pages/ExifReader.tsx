import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

const ExifReader: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Exif Reader test.</h1>
    </>
  );
};

export default ExifReader;

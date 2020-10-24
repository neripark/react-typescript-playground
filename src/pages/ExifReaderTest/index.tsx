import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import useHooks from './hooks';

type PageProps = {} & RouteComponentProps<{}>;

const ExifReaderTest: React.FC<PageProps> = () => {
  const hooks = useHooks();
  return (
    <>
      <h1>Exif Reader test.</h1>
      <input className="file-input-test" type="file" onChange={hooks.onChange}/>
    </>
  );
};

export default ExifReaderTest;

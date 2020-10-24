import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import * as ExifReader from 'exifreader';

type PageProps = {} & RouteComponentProps<{}>;

const ExifReaderTest: React.FC<PageProps> = () => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files === null) return;
    const file = e.target.files[0];
    reader.onload = () => {
      console.log('on load kicked.');
      const result = reader.result!;
      const tags = ExifReader.load(result as ArrayBuffer)
      console.log(tags.Orientation);
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <>
      <h1>Exif Reader test.</h1>
      <input className="file-input-test" type="file" onChange={onChange}/>
    </>
  );
};

export default ExifReaderTest;

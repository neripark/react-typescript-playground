import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import useHooks from './hooks';

type PageProps = {} & RouteComponentProps<{}>;

const ExifReaderTest: React.FC<PageProps> = () => {
  const hooks = useHooks();
  return (
    <>
      <h1>Exif Reader test.</h1>
      <div className="file-unit-container">
        <input className="file-input-test" type="file" onChange={hooks.onChange}/>
        <div className="image-wrapper">
          {hooks.img && 
            <img
              className="load-image"
              src={hooks.img.src}
              alt="hooks img"
            />
          }
        </div>
      </div>
    </>
  );
};

export default ExifReaderTest;

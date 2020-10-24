import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import useHooks from './hooks';

type PageProps = {} & RouteComponentProps<{}>;

const ExifReaderTest: React.FC<PageProps> = () => {
  const hooks = useHooks();
  return (
    <>
      <h1>Exif Reader test.</h1>
      <input className="file-input-test" type="file" onChange={hooks.onChange} />
      <div className="file-unit-container">
        <div className="image-wrapper">
          <h2>image</h2>
          {hooks.img &&
            <img
              className="load-image"
              src={hooks.img.src}
              alt="hooks img"
            />
          }
        </div>
        <div className="image-wrapper">
          <h2>canvas</h2>
          <canvas
            ref={hooks.canvasRef}
            className="image-canvas"
          />
          <button onClick={hooks.handleCanvasToImage}>to Image</button>
        </div>
      </div>
      <div>
        { hooks.targetImg && <img src={hooks.targetImg.src} alt="targetImg" /> }
      </div>
    </>
  );
};

export default ExifReaderTest;

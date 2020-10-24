import * as React from "react";
import * as ExifReader from 'exifreader';

const useHooks = () => {
  const [img, setImg] = React.useState<HTMLImageElement | undefined>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loadByReader(e);
    loadAsImage(e);
  }

  const loadByReader = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files === null) return;
    const file = e.target.files[0];

    // reader onload はイベントを受け取れる。reader 自体を読むよりそのほうがよさそう
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const result = e.target!.result;
      const tags = ExifReader.load(result as ArrayBuffer)
      console.log(tags.Orientation);
    };
    
    // Exifreader が ArrayBuffer を要求しているので readAsArrayBuffer
    reader.readAsArrayBuffer(file);
  }

  const loadAsImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const reader = new FileReader();
    const image = new Image();
    reader.onload = () => {
      image.onload = () => {
        setImg(image);
      }
      if (reader.result?.toString() === undefined) return ;
      image.src = reader.result?.toString();
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  return {
    onChange,
    img,
  };
};

export default useHooks;

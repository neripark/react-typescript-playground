import * as React from "react";
import * as ExifReader from 'exifreader';

const useHooks = () => {
  const [img, setImg] = React.useState<HTMLImageElement | undefined>();
  const [targetImg, setTargetImg] = React.useState<HTMLImageElement | undefined>();
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loadByReader(e);
    loadAsImage(e);
    loadAsCanvas(e);
  }

  const loadByReader = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files === null) return;
    const file = e.target.files[0];

    // reader onload は自分自身を受け取れる。reader 自体を読むよりそのほうがよさそう
    reader.onload = (self: ProgressEvent<FileReader>) => {
      const result = self.target!.result;
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
    // 自分自身を受け取れる
    reader.onload = (self: ProgressEvent<FileReader>) => {
      // base64 が入っている
      // console.log("log 1", self.target!.result);
      image.onload = () => {
        setImg(image);
      }
      if (self.target!.result?.toString() === undefined) return ;
      image.src = self.target!.result?.toString();
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const loadAsCanvas = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    const reader = new FileReader();
    const image = new Image();
    reader.onload = (self: ProgressEvent<FileReader>) => {
      image.onload = () => {
        setImg(image);
        // --- start ---
        const ctx = canvasRef.current!.getContext("2d");
        ctx?.drawImage(image, 0, 0);
        // --- end ---
      }
      if (self.target!.result?.toString() === undefined) return;
      image.src = self.target!.result?.toString();
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleCanvasToImage = () => {
    const image = new Image();
    // (1) 画面の canvas から取得してやる場合
    // image.src = canvasRef.current!.toDataURL();
    // setTargetImg(image)
    // ----------
    // (2) 画面の canvas から取らずにやる場合
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (img === undefined) return;
    ctx?.drawImage(img, 0, 0);
    image.src = canvas.toDataURL();
    setTargetImg(image)
  }

  return {
    onChange,
    img,
    canvasRef,
    handleCanvasToImage,
    targetImg,
  };
};

export default useHooks;

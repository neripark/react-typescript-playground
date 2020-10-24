import * as React from "react";
import * as ExifReader from 'exifreader';

const useHooks = () => {

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    loadByReader(e);
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
    reader.readAsArrayBuffer(file);
  }

  return {
    onChange,
  };
};

export default useHooks;

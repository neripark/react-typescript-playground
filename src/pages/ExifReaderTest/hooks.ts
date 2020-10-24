import * as React from "react";
import * as ExifReader from 'exifreader';

const useHooks = () => {

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

  return {
    onChange,
  };
};

export default useHooks;

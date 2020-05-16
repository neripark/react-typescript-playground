import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import AsyncComponent from "../components/AsyncComponent";

type PageProps = {} & RouteComponentProps<{}>;

const AsyncComponentTest: React.FC<PageProps> = () => {
  const simulateAsync = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve(console.log("success 1"));
        } else {
          reject(console.log("error 1"));
        }
      }, 1000);
    })
      .then(() => {
        console.log("success 2");
      })
      .catch(error => {
        // memo: ここが例外を発生させない処理だと、AsyncComponent側でerrorにならない。
        // console.error('error 2')
        console.log("error 2");
        throw new Error(error);
      });
  };

  return (
    <>
      <h3>MyComopnent</h3>
      <AsyncComponent asyncFunction={simulateAsync} />
    </>
  );
};

export default AsyncComponentTest;

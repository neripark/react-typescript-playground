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
      <h2>Async Component</h2>
      <ul>
        <li>使う側からPromiseを返す非同期関数を渡して、コンポーネント側のイベントで発火するようにする。</li>
        <li>使う側とコンポーネント側、両方に then や catch を書くことができる。</li>
        <ul>
          <li>その場合は書いた順（メソッドチェーンがつながった順）に処理される。</li>
          <li>catch を２箇所に書く場合は、最後意外のcatchにしっかりと例外を発生させるコードを書かないと、以降のcatchが実行されない。</li>
        </ul>
      </ul>
      <AsyncComponent asyncFunction={simulateAsync} />
    </>
  );
};

export default AsyncComponentTest;

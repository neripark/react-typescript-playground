import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

const NextFocus: React.FC<PageProps> = () => {
  return (
    <section>
      <h1>Next Focus</h1>
      <MyComponent />
    </section>
  );
};


// https://ja.reactjs.org/docs/refs-and-the-dom.html
// クラスコンポーネントを使ってrefを学習する
interface Props1 {};
interface State1 {
  myRef: React.RefObject<HTMLDivElement>;
};

class MyComponent extends React.Component<Props1, State1> {
  constructor(props: Props1){
    super(props);
    this.state = {
      myRef: React.createRef<HTMLDivElement>()
    }
  }

  private Logger() {
    // Node = DOMのNode。 document.createElement() 等で得られる。
    console.log(this.state.myRef!.current?.firstChild);
  }

  render() {
    return (
      <>
        <h3>MyComopnent</h3>
        <div ref={this.state.myRef}>
          divの中の文字列
        </div>
        <button onClick={() => this.Logger()}>Logger!</button>
      </>
    )
  }
}

export default NextFocus;

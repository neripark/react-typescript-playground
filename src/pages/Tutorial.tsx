import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

const Tutorial: React.FC<PageProps> = () => {
  const ref = React.createRef<HTMLButtonElement>();

  return (
    <>
      <h1>This is tutorial page.</h1>
      <h2>コンポジションと継承</h2>
      <SimpleWrapper> テストのテキスト </SimpleWrapper>
      <p>
        コンポジションはchildrenを受け取れるようにすることによる抽象化を行うもの。継承は有効なケースが見つかっていない。
      </p>
      <hr />
      <h2>Refのフォワーディング</h2>
      <div>
        <FancyButton>ボタンラベル</FancyButton>
        <FancyRefButton ref={ref}>ボタンラベル</FancyRefButton>
      </div>
    </>
  );
};

const FancyButton: React.FC = ({ children }) => <button>{children}</button>;

interface PropsFancyRef {
  children: string;
}

const FancyRefButton = React.forwardRef<HTMLButtonElement, PropsFancyRef>(
  ({ children }: PropsFancyRef, ref) => <button ref={ref}>{children}</button>
);

const SimpleWrapper: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

export default Tutorial;

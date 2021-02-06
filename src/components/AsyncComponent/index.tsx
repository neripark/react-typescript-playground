import * as React from "react";

interface Props {
  asyncFunction: () => Promise<void>;
  className?: string;
}

const buttonFeel = {
  pending: {
    class: "",
    label: "Click!"
  },
  progress: {
    class: "",
    label: "..."
  },
  resolved: {
    class: "success",
    label: "success!!"
  },
  rejected: {
    class: "error",
    label: "error!!"
  }
};

const AsyncComponent: React.FC<Props> = ({ asyncFunction, className }) => {
  const [promiseState, setPromiseState] = React.useState<
    "pending" | "progress" | "resolved" | "rejected"
  >("pending");

  const handler = () => {
    setPromiseState("progress");
    asyncFunction()
      .then(() => {
        setPromiseState("resolved");
        console.log("success 3");
      })
      .catch(() => {
        setPromiseState("rejected");
        console.log("error 3");
      });
  };

  return (
    <>
      <button
        onClick={handler}
        className={`async-component ${buttonFeel[promiseState].class} ${className}`}
        disabled={promiseState === "progress"}
      >
        {buttonFeel[promiseState].label}
      </button>
    </>
  );
};

export default AsyncComponent;

import * as React from "react";

const UseMemoTutorial: React.FC = () => {
  const [count, setCount] = React.useState<number>(1)
  const [count2, setCount2] = React.useState<number>(1)

  const double = React.useMemo(() => {
    console.log('useMemo executed!');
    
    return count + count2;
  }, [count]);

  const calcDouble = () => {
    setCount(prev => prev * 2)
  }

  const calcDouble2 = () => {
    setCount2(prev => prev * 2)
  }

  const reset = () => {
    setCount(1)
    setCount2(1)
  }

  return (
    <div>
      <p>count: {count}</p>
      <p>count2: {count2}</p>
      <p>sum: {double}</p>
      <button onClick={() => calcDouble()} >double!</button>
      <br />
      <button onClick={() => calcDouble2()} >double2!</button>
      <br />
      <button onClick={() => reset()} >reset</button>
    </div>
  );
};

export default UseMemoTutorial;

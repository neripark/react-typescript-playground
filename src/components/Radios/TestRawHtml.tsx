import * as React from "react";

export const TestRawHtml: React.FC = () => {
  // note: onChange はクリックされたものしか発火しない。
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div>
        <label>
          <input
            type="radio"
            name="question1"
            value="answer1"
            onChange={onChange}
          />
          <span>回答1</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="question1"
            value="answer2"
            defaultChecked
            onChange={onChange}
          />
          <span>回答2</span>
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="question1"
            value="answer3"
            onChange={onChange}
          />
          <span>回答3</span>
        </label>
      </div>
    </>
  );
};

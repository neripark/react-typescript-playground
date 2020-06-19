import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type PageProps = {} & RouteComponentProps<{}>;

interface Todo {
  label: string;
  done: boolean;
}

const defaultTodoData: Todo[] = [
  { label: "Task A", done: false }
]

const ReduxText: React.FC<PageProps> = () => {
  const [ todos, updateTodos ] = React.useState(defaultTodoData);
  const [ newLabel, updateNewLabel ] = React.useState("");

  const addTodo = () => {
    const newItem: Todo = {
      label: newLabel,
      done: false
    };
    updateTodos(prev => prev.concat(newItem));
  };
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateNewLabel(e.currentTarget.value);
  }

  return (
    <>
      <h1>Redux text.</h1>
      <ul style={listStyle}>
        {todos.map((element, index) => <Todo key={index} label={element.label} done={element.done} />)}
      </ul>
      <input type="text" name="add-todo" defaultValue={newLabel} onChange={e => onChange(e)}/>
      <button onClick={addTodo}>追加する</button>
    </>
  );
};


// _________________
//
interface TodoProps {
  label: string;
  done: boolean;
}

const Todo = (props: TodoProps) => {
  const [checked, updateChecked] = React.useState(props.done);
  const handleTodo = () => {
    updateChecked(prev => !prev);
  }

  return (
    <li style={itemStyle}>
      <label style={labelStyle} onClick={handleTodo}>
        <input type="checkbox" defaultChecked={checked}/>
        <span style={todoInnerTextStyle}>{props.label}</span>
      </label>
    </li>
  )
}

// _________________
//
const listStyle = {
  padding: "0",
  borderTop: "1px solid #ccc",
};

const itemStyle = {
  borderBottom: "1px solid #ccc",
  listStyle: "none",
  margin: "0"
};

const labelStyle = {
  display: "block",
  cursor: "pointer",
  padding: "1em 0",
}

const todoInnerTextStyle: {[key: string]: string} = {
  userSelect: "none"
};


export default ReduxText;

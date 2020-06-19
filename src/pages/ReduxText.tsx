import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { storeFactory } from "../store/store";
import { actions } from "../store/actions";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

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
  const [ newLabel, updateInputLabel ] = React.useState("");
  //  // ReduxStore の initialState を注入
  // const store = storeFactory({
  //   Counter: {
  //     count: 1000,
  //   },
  // });
  const store = storeFactory(
    {
      todos: defaultTodoData
    }
  );

  const addTodo = () => {
    updateInputLabel("");
    const newItem: Todo = {
      label: newLabel,
      done: false
    };
    updateTodos(prev => prev.concat(newItem));
    store.dispatch(actions.addTodo);
  };
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateInputLabel(e.currentTarget.value);
  }

  return (
    <>
      <h1>Redux text.</h1>
      <ul style={listStyle}>
        {todos.map((element, index) => <Todo key={index} label={element.label} done={element.done} />)}
      </ul>
      <input type="text" name="add-todo" value={newLabel} onChange={e => onChange(e)}/>
      <button onClick={addTodo} style={{marginLeft: "10px"}}>追加する</button>
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
  userSelect: "none",
  marginLeft: "10px"
};


export default ReduxText;

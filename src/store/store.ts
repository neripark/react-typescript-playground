import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// reducerとは？ : stateとactionを受け取り、（必要があればactionを使って）新しいstateを作って返す関数
function reducerFactory(state = { test: "test" }, action: any) {
  switch (action.type) {
    case "ADD_TODO":
      return state
    default: 
      return state;
  }
}

// todo: commonnary
interface Todo {
  label: string;
  done: boolean;
}

interface Todos {
  todo: Todo[];
}

// export const storeFactory = (injectState?: Partial<StoreState>) => {
// export const storeFactory = (injectState?: Partial<Todos>) => {
//   return createStore(combineReducers({ myReducer }), composeWithDevTools());
// };

export const storeFactory = (injectState?: Partial<StoreState>) => {
  return createStore(
    combineReducers(reducersFactory(injectState)),
    composeWithDevTools()
  );
};

// takepepeさんのコード丸コピー
const reducersFactory = (injectState?: Partial<StoreState>) => ({
  // Todos: reducerFactory(injectState?.Todos),
});

type StoreState = {
  Todos: Todos;
};
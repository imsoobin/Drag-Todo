import React, { useRef } from "react";
// import { initialState, reducer } from "../reducer";
// import * as types from "../types/index";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        // value={state.todo}
        value={todo}
        ref={inputRef}
        onChange={
          (e) => setTodo(e.target.value)
          // dispatch({ type: types.CHANGE_INPUT_TODO, payload: e.target.value })
        }
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;

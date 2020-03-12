import { ToggleTodo } from "./index";
import { TOGGLE_TODO } from '../constants';
import addTodos from "../Reducer/addToDoItems";
import data from "../data.json";
export function addTodo(data) {
  return async function (dispatch, getstate) {
    dispatch(ToggleTodo({ data: data }))
  };
}
export function getTodo() {
  return async function (dispatch, getstate) {
    dispatch(ToggleTodo({ data: data }));
  };
}
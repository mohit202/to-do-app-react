import React from "react";
import * as constant from "../constants";

let intialState = {
    isLoading: false
}
const toggleTodos = (state = intialState, action) => {
  switch (action.type) {
    case constant.TOGGLE_TODO:
      return {...state, data: action.payload.data}
    default:
      return state;
  }
};
export default toggleTodos;
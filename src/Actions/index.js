import React from 'react';
import { createAction } from 'redux-actions';
import * as constant from '../constants'
export const ToggleTodo = createAction(constant.TOGGLE_TODO);
export const AddTodo = createAction(constant.ADD_TODO);
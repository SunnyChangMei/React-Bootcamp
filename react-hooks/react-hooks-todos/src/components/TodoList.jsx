import React from 'react';
import {
  Paper,
  List,
  Divider
} from '@material-ui/core';
import Todo from './Todo';

const TodoList = ({ todos, removeTodo, toggleTodo }) => (
  <Paper>
    <List>
      {todos.map(({ task, id, completed }) => (
        <>
          <Todo key={id} task={task} completed={completed} removeTodo={removeTodo} id={id} toggleTodo={toggleTodo} />

          <Divider />
        </>
      ))}
    </List>
  </Paper>
);

export default TodoList;

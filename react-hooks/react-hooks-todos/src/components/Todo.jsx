import React from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Todo = ({ task, completed, removeTodo, id }) => (
  <ListItem>
    <Checkbox tabIndex={-1} check="completed" />

    <ListItemText
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}>
      {task}
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="Edit" onClick={() => removeTodo()}>
        <EditIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Todo;

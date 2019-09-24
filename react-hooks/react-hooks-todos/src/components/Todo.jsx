import React from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit';



const Todo = ({ task, completed }) => (
  <ListItem>
    <Checkbox tabIndex={-1} check="completed" />

    <ListItemText>{task}</ListItemText>
    <ListItemSecondaryAction>
      <IconButton>
        <DeleteIcon />
      </IconButton>
      <IconButton>
        <EditIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Todo;

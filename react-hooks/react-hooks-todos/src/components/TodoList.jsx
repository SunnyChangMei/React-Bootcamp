import React from 'react';
import { Paper, List, ListItem, ListItemText } from '@material-ui/core';

const TodoList = ({ todos }) => (
  <Paper>
    <List>
      {todos.map(({ todo, id, task, completed }) => (
        <>
          <ListItem>
            <ListItemText key={id}>{task}</ListItemText>
          </ListItem>
        </>
      ))}
    </List>
  </Paper>
);

export default TodoList;

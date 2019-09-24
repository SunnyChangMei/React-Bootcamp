import React, { useState, useEffect } from 'react';
import { Paper, AppBar, Toolbar, Typography } from '@material-ui/core';
import TodoList from './TodoList'
import TodoForm from './TodoForm';

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: false },
    { id: 3, task: 'Coding', completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    setTodos(initialTodos)

  }, [initialTodos])

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}>
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
      <TodoForm />
    </Paper>
  );
};

export default TodoApp;

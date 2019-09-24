import React, { useState, useEffect } from 'react';
import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import TodoList from './TodoList'
import TodoForm from './TodoForm';

const TodoApp = () => {

  const initialTodos = [
    { id: 1, task: 'Clean Fishtank', completed: false },
    { id: 2, task: 'Wash Car', completed: true },
    { id: 3, task: 'Coding', completed: false }
  ];

  const [todos, setTodos] = useState(initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, {id: 4, task: newTodoText, completed: false}])
  }

  const removeTodo = todoId => {
    const updatedTodo = todos.filter( todo => todo.id !== todoId)
    setTodos(updatedTodo)
  }

  // useEffect(() => {
  //   setTodos(initialTodos)

  // }, [initialTodos])

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
      <Grid container justify='center' style={{marginTop: '1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

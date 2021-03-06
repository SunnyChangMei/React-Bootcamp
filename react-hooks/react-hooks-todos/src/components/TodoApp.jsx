import React, { useState, useEffect } from 'react';
import { Paper, AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import UUID from 'uuid/v4';

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: UUID(), task: newTodoText, completed: false }]);
  };

  const removeTodo = todoId => {
    const updatedTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodo);
  };

  const toggleTodo = todoId => {
    const updatedTodo = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodo);
  };

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
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;

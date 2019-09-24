import React from 'react';
import { Paper, TextField, Button } from '@material-ui/core';
import useInputState from '../hooks/useInputState';

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState('');

  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}>
        <TextField value={value} onChange={handleChange} />
      </form>
      {/* <Button onClick={}>
        Submit
      </Button> */}
    </Paper>
  );
};

export default TodoForm;

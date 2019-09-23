import React, { useState } from 'react';

const SWMovies = props => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input])

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>You pick {number}</h4>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default SWMovies;

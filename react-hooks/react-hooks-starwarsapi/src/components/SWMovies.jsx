import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SWMovies = props => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://swapi.co/api/films/${number}`
        );
        const data = response.data;
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [number]);

  return (
    <div>
      <h1>Pick A Movie</h1>
      <h4>Movie Selected: {movie.title}</h4>
      <h4>Producer: {movie.producer}</h4>

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

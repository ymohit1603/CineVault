/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';
import { Movie } from '../index';

function MovieList({ movies, numberOfMovies, excludeFirst }) {
  const classes = useStyles();
  const startFrom = excludeFirst ? 1 : 0;

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startFrom, numberOfMovies).map((movie, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
}

export default MovieList;

/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Exercise 02: Movie Library
 * We are trying to make a movie library for internal users. We are facing some issues by creating this, try to help us following the next steps:
 * !IMPORTANT: Make sure to run yarn movie-api for this exercise
 * 1. We have an issue fetching the list of movies, check why and fix it (handleMovieFetch)
 * 2. Create a filter by fetching the list of gender (http://localhost:3001/genres) and then loading
 * list of movies that belong to that gender (Filter all movies).
 * 3. Order the movies by year and implement a button that switch between ascending and descending order for the list
 * 4. Try to recreate the user interface that comes with the exercise (exercise02.png)
 * 
 * You can modify all the code, this component isn't well designed intentionally. You can redesign it as you need.
 */

import "./assets/styles.css";
import useGetMovies from "./hooks/useGetMovies";
import CardMovie from "./components/CardMovie";


export default function Exercise02 () {
  const {movies, loading, moviesGenres, selectGenre, changeOrder, order} = useGetMovies();

  return (
    <section className="movie-library">
      <div className="movie-library__header" >
      <h1 className="movie-library__title">
        Movie Library
      </h1>
      {moviesGenres.length > 0 &&
        
      <div className="movie-library__actions">
        <select name="genre" placeholder="Search by genre..." onChange={(e) => selectGenre(e.target.value)}>
          {
            moviesGenres.map((item, index) => {
              return(<option key={index}  value={item}  >{item}</option>)
            })
          }
        </select>
        <button onClick={ changeOrder}>{`Order ${order?'Descending':'Ascending' }`}</button>
      </div>
      }
      </div>
      {loading ? (
        <div className="movie-library__loading">
          <p>Loading...</p>
        </div>
      ) : (
        <ul className="movie-library__list">
          {movies.map(movie => (
            <CardMovie key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
     
    </section>
  )
}
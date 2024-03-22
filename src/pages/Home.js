import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard"
import NavBar from "../components/NavBar"

function Home() {

  const [movies, setMovies]= useState([]);
  const url = `http://localhost:4000/movies`

  useEffect(()=> {
    fetch(url)
      .then (res => {
        if (!res.ok) {
          console.log("Error fetching data");
        }
        return res.json();       
      })
      .then (data => setMovies(data))
      .catch(error => console.log("Error fetching data:", error));   
  }, []);

  return (
    <>
      <header>
      <NavBar/>
        <h1>Home Page</h1>
      </header>
      
      <main>
        {movies.map((movie)=>(
          <MovieCard 
          key = {movie.id}
          id = {movie.id}
          title = {movie.title}
          />
        ))}
      </main>
    </>
  );
};

export default Home;

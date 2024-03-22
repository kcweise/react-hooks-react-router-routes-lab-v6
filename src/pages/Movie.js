import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar"

function Movie() {
  const { id } = useParams();   
  const [movie, setMovie]= useState(null);

  const url = `http://localhost:4000/movies/${id}`;

  useEffect(()=> {
    fetch(url)
      .then (res => {
        if (!res.ok) {
          console.log("Error fetching data");
        }
        return res.json();       
      })
      .then (data => setMovie(data))
      .catch(error => console.log("Error fetching data:", error));   
  }, [id]);

  return (
    <>
      <header>
      <NavBar/>
        Movies
      </header>
      <main>
      {movie ? (
          <>
            <h1>{movie.title}</h1>
            <p>{movie.time}</p>
            <div>{movie.genres.map((genre, index) => <span key={index}>{genre}</span>)}</div>
          </>
        ) : (
          <p>Loading movie information...</p>
        )}
      </main>
    </>
  );
};

export default Movie;

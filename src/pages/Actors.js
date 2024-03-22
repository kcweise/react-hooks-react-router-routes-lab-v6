import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Actors() {

  const [actors, setActors]= useState([]);
  const url = `http://localhost:4000/actors`

  useEffect(()=> {
    fetch(url)
      .then (res => {
        if (!res.ok) {
          console.log("Error fetching data");
        }
        return res.json();       
      })
      .then (data => setActors(data))
      .catch(error => console.log("Error fetching data:", error));   
  }, []);

  return (
    <>
      <header>
      <NavBar/>
        <h1>Actors Page</h1>
      </header>
      <main>
      {actors.map((actor) => (
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Actors;

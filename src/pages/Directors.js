import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {

  const [directors, setDirectors]= useState([]);
  const url = `http://localhost:4000/directors`

  useEffect(()=> {
    fetch(url)
      .then (res => {
        if (!res.ok) {
          console.log("Error fetching data");
        }
        return res.json();       
      })
      .then (data => setDirectors(data))
      .catch(error => console.log("Error fetching data:", error));   
  }, []);

  return (
    <>
      <header>
      <NavBar/>
        <h1>Directors Page</h1>        
      </header>
      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;

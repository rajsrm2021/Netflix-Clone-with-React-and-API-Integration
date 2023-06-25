import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "a9ae57cc7d7fa826d3f42660742f5469";
const url = "https://api.themoviedb.org/3/movie";
const imgurl = "https://image.tmdb.org/t/p/original";
const popular = "popular";

const upComing = "upcoming";

const Card = ({ img }) => <img className="card" src={img} alt="cover" />;

const Row = ({ title, arr = [] }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item, index) => (
        <Card key={index} img={`${imgurl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);

const Mylist = () => {
  const [popularMovies, setPopularmovies] = useState([]);
  const [upComingmovies, setupcoming] = useState([]);
 

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}&page=5`); //api call

      setPopularmovies(results);
    };
    
    const fetchUpcomming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upComing}?api_key=${apiKey}&page=4`); //api call

      setupcoming(results);
    };
    
    
    fetchPopular();
    fetchUpcomming();
  }, []);

  return (
    <section className="home">
      

      <Row title={"Your List"} arr={popularMovies} />
      <Row title={""} arr={upComingmovies} />
      
    </section>
  );
};

export default Mylist;

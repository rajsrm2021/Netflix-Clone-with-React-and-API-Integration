import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = "a9ae57cc7d7fa826d3f42660742f5469";
const url = "https://api.themoviedb.org/3/movie";
const imgurl = "https://image.tmdb.org/t/p/original";
const popular = "popular";
const toprated = "top_rated";
const nowPlaying = "now_playing";
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

const Tvshow = () => {
  const [popularMovies, setPopularmovies] = useState([]);
  const [upComingmovies, setupcoming] = useState([]);
  const [topratedMovies, settopratedmovies] = useState([]);
  const [nowplayingmovies, setnowplayingmovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}&page=8`); //api call

      setPopularmovies(results);
    };
    const fetchTopraed = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${toprated}?api_key=${apiKey}&page=9`); //api call

      settopratedmovies(results);
    };
    const fetchUpcomming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upComing}?api_key=${apiKey}&page=10`); //api call

      setupcoming(results);
    };
    const fetchNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}&page=11`); //api call

      setnowplayingmovies(results);
    };
    fetchTopraed();
    fetchNowplaying();
    fetchPopular();
    fetchUpcomming();
  }, []);

  return (
    <section className="home">
      

      <Row title={"Top TV Show Collections"} arr={popularMovies} />
      <Row title={"Horrer TV Shows"} arr={upComingmovies} />
      <Row title={"Comedy TV Shows"} arr={nowplayingmovies} />
      <Row title={"Hindi TV Shows"} arr={topratedMovies} />
    </section>
  );
};

export default Tvshow;

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

const Recentlyadded = () => {
  const [popularMovies, setPopularmovies] = useState([]);
  const [upComingmovies, setupcoming] = useState([]);
  const [topratedMovies, settopratedmovies] = useState([]);
  const [nowplayingmovies, setnowplayingmovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}&page=12`); //api call

      setPopularmovies(results);
    };
    const fetchTopraed = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${toprated}?api_key=${apiKey}&page=13`); //api call

      settopratedmovies(results);
    };
    const fetchUpcomming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upComing}?api_key=${apiKey}&page=14`); //api call

      setupcoming(results);
    };
    const fetchNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}&page=15`); //api call

      setnowplayingmovies(results);
    };
    fetchTopraed();
    fetchNowplaying();
    fetchPopular();
    fetchUpcomming();
  }, []);

  return (
    <section className="home">
      

      <Row title={"TV Shows"} arr={popularMovies} />
      <Row title={"Hindi Web-Series"} arr={upComingmovies} />
      <Row title={"Comedy Series"} arr={nowplayingmovies} />
      <Row title={"Recently Added Movies"} arr={topratedMovies} />
    </section>
  );
};

export default Recentlyadded;

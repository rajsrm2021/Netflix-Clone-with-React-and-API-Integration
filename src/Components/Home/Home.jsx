import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

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

const Home = () => {
  const [popularMovies, setPopularmovies] = useState([]);
  const [upComingmovies, setupcoming] = useState([]);
  const [topratedMovies, settopratedmovies] = useState([]);
  const [nowplayingmovies, setnowplayingmovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${popular}?api_key=${apiKey}`); //api call

      setPopularmovies(results);
    };
    const fetchTopraed = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${toprated}?api_key=${apiKey}&page=2`); //api call

      settopratedmovies(results);
    };
    const fetchUpcomming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${upComing}?api_key=${apiKey}&page=5`); //api call

      setupcoming(results);
    };
    const fetchNowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/${nowPlaying}?api_key=${apiKey}&page=3`); //api call

      setnowplayingmovies(results);
    };
    fetchTopraed();
    fetchNowplaying();
    fetchPopular();
    fetchUpcomming();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[2]
            ? `url(${`${imgurl}/${popularMovies[2].poster_path}`})`
            : "rgb(15, 15, 15)",
        }}
      >
        {popularMovies[2] && <h1>{popularMovies[2].original_title}</h1>}
        {popularMovies[2] && <p>{popularMovies[2].overview}</p>}
        <div>
        <button className="btn"><BiPlay />Play </button>
        <button className="btn">My List <AiOutlinePlus /></button>
        </div>
      </div>

      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"TV Show"} arr={upComingmovies} />
      <Row title={"Movies"} arr={nowplayingmovies} />
      <Row title={"Recently Added"} arr={topratedMovies} />
    </section>
  );
};

export default Home;

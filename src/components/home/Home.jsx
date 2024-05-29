import { useEffect, useState } from "react";
import "./Home.scss";
import logo2 from "/logo2.jpg";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Row from "../row/Row";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  const [PopularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [NowPlayingMovies, setNowPlayingMovies] = useState([]);
  // const [Genre, setGenre] = useState([]);

  const api_Key = "0ade3fd22f9a0410aba0af1fc222332c";

  const url = "https://api.themoviedb.org/3";

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        let response = await fetch(
          `${url}/movie/now_playing?api_key=${api_Key}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { results } = await response.json();
        setNowPlayingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUpcoming = async () => {
      try {
        let response = await fetch(`${url}/movie/upcoming?api_key=${api_Key}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { results } = await response.json();
        setUpcomingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPopular = async () => {
      try {
        let response = await fetch(`${url}/movie/popular?api_key=${api_Key}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { results } = await response.json();
        setPopularMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTopRated = async () => {
      try {
        let response = await fetch(`${url}/movie/top_rated?api_key=${api_Key}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { results } = await response.json();
        setTopRatedMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNowPlaying();

    fetchUpcoming();

    fetchPopular();

    fetchTopRated();
  }, []);

  return (
    <section className="home">
      <Helmet>
        <title>Home - Netflix</title>
      </Helmet>
      <div className="banner">
        <div>
          <img src={logo2} alt="logo2" />
          <p>
            In this suspenseful sci-fi series, a robot inspector tracks down a
            serial killer targeting the world's seven most advanced robots.
          </p>
          <div>
            <button>
              <FaPlay style={{ fill: "#000" }} />
              Play
            </button>
            <button>
              <IoIosInformationCircleOutline style={{ strokeWidth: "2rem" }} />
              More Info
            </button>
          </div>
        </div>
      </div>
      <Row title="Now Playing" movies={NowPlayingMovies} />
      <Row title="Upcoming" movies={UpcomingMovies} />
      <Row title="Popular" movies={PopularMovies} />
      <Row title="Top Rated" movies={TopRatedMovies} />
    </section>
  );
};

export default Home;

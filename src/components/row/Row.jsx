import { lazy } from "react";
import "./Row.scss";
const Card = lazy(() => import("../card/Card"));

const Row = ({ title, movies }) => {
  const img_url = "https://image.tmdb.org/t/p/";
  const img_size = "original";
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="items">
        {Array.isArray(movies) &&
          movies.map((movie) => {
            return (
              <Card
                key={movie.id}
                img={`${img_url}/${img_size}/${movie.poster_path}`}
                altText={movie.title}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Row;

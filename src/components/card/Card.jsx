import "./Card.scss";

const Card = ({ img, altText }) => {
  return (
    <div className="card">
      <img src={img} alt={altText} />
    </div>
  );
};

export default Card;

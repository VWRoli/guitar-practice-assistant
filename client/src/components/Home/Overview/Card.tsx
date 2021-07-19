type Props = {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
};

const Card: React.FC<Props> = ({
  title,
  text,
  image,
  reverse,
}): JSX.Element => {
  return (
    <article
      className={
        reverse
          ? 'landing__card-container card-reverse'
          : 'landing__card-container'
      }>
      <div className="card-text-wrapper">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="card-img-wrapper">
        <img src={image} alt={title} />
      </div>
    </article>
  );
};

export default Card;

import { Link } from 'react-router-dom';

type Props = {
  text: string;
  link: boolean;
  route?: string;
};

const Button: React.FC<Props> = ({ text, link, route }): JSX.Element => {
  return (
    <>
      {link ? (
        <Link to={route!}>
          <button type="submit" className="primary-btn">
            {text}
          </button>
        </Link>
      ) : (
        <button type="submit" className="primary-btn">
          {text}
        </button>
      )}
    </>
  );
};

export default Button;

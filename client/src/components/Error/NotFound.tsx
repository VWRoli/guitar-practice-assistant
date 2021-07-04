import { FaExclamationTriangle } from 'react-icons/fa';
import brokenStrings from '../../assets/not-found.png';
import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  return (
    <section id="error-page">
      <h1>
        <FaExclamationTriangle /> Error
      </h1>
      <img src={brokenStrings} alt="" style={{ width: '250px' }} />

      <h2>Sorry, we couldn't find that page.</h2>

      <Link to="/" className="secondary-btn">
        Back Home
      </Link>
    </section>
  );
};

export default NotFound;

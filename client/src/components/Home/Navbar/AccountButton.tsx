import { Link } from 'react-router-dom';

type Props = {
  text: string;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
  boolean: boolean;
};

const AccountButton: React.FC<Props> = ({
  text,
  setIsSignup,
  boolean,
}): JSX.Element => {
  return (
    <li className="nav-link">
      <Link
        to="/auth"
        onClick={() => setIsSignup(boolean)}
        className={boolean ? 'accent-clr' : ''}>
        {text}
      </Link>
    </li>
  );
};

export default AccountButton;

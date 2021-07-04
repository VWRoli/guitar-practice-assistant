import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { Link } from 'react-router-dom';
//Components
import Input from './Input';
import Error from '../Error/Error';
import { State } from '../../reducers';

export type formDataType = {
  username: string;
  email?: string;
  password: string;
  confirmPassword?: string;
};

const initialState: formDataType = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

type Props = {
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Auth: React.FC<Props> = ({ isSignup, setIsSignup }): JSX.Element => {
  const isError = useSelector((state: State) => state.items.isError);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Switch between login and signup form
  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  return (
    <section id="auth">
      <div className="auth__bg-overlay"></div>
      <header className="auth__main-header">
        <Link to="/">
          <h1 className="logo">
            <span className="accent-clr">Guitar</span> PA
          </h1>
        </Link>
      </header>
      <form className="auth__form" onSubmit={handleSubmit}>
        <header className="form-header">
          <h2>
            {isSignup ? 'Sign up for ' : 'Log in to '}
            <span className="accent-clr">Guitar</span> PA
          </h2>
        </header>
        <div className="form-body">
          <Input
            name="username"
            type="text"
            placeholder="Username"
            autoFocus={true}
            handleChange={handleChange}
          />
          {isSignup && (
            <Input
              name="email"
              type="email"
              placeholder="Email"
              handleChange={handleChange}
            />
          )}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            handleChange={handleChange}
          />
          {isSignup && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              handleChange={handleChange}
            />
          )}
          {isError && <Error />}
          <button type="submit" className="primary-btn signup-btn">
            {isSignup ? 'Create my account' : 'Log in to my account'}
          </button>

          <hr />

          {isSignup ? (
            <p className="login-switch" onClick={switchMode}>
              Already have an account? <span>Log In</span>
            </p>
          ) : (
            <p className="login-switch" onClick={switchMode}>
              Don't have an account? <span>Sign Up</span>
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Auth;

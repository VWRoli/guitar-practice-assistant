import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { Link } from 'react-router-dom';
//Components
import Input from './Input';
import Message from '../utils/Message/Message';
import { State } from '../../reducers';
import Button from '../utils/Button/Button';
import validateForm from './validateForm';
import LoginSwitch from './LoginSwitch';

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

export type AuthPropType = {
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Auth: React.FC<AuthPropType> = ({
  isSignup,
  setIsSignup,
}): JSX.Element => {
  const errorMsg = useSelector((state: State) => state.items.errorMsg);
  const [formErrors, setFormErrors] = useState<formDataType | null>(null);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setFormErrors(validateForm(formData));
    if (isSignup && !formErrors) {
      dispatch(signup(formData, history));
    } else if (!isSignup && !formErrors) {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            error={formErrors?.username}
          />

          {isSignup && (
            <Input
              name="email"
              type="email"
              placeholder="Email"
              handleChange={handleChange}
              error={formErrors?.email}
            />
          )}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            handleChange={handleChange}
            error={formErrors?.password}
          />

          {isSignup && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              handleChange={handleChange}
              error={formErrors?.confirmPassword}
            />
          )}
          {errorMsg && <Message msg={errorMsg} isError={true} />}

          <Button
            text={isSignup ? 'Create my account' : 'Log in to my account'}
            link={false}
          />

          <hr />

          <LoginSwitch isSignup={isSignup} setIsSignup={setIsSignup} />
        </div>
      </form>
    </section>
  );
};

export default Auth;

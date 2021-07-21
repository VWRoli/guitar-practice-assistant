import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import { Link } from 'react-router-dom';
//Components
import Input from './Input';
import Message, { msgType } from '../utils/Message/Message';
import { State } from '../../reducers';
import Button from '../utils/Button/Button';
import validateForm from './validateForm';
import LoginSwitch from './LoginSwitch';
import Loading from '../utils/Loading/Loading';

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

export interface AuthPropType {
  isSignup: boolean;
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Auth: React.FC<AuthPropType> = ({
  isSignup,
  setIsSignup,
}): JSX.Element => {
  const isLoading = useSelector((state: State) => state.auth.isLoading);
  const errorMsg = useSelector((state: State) => state.items.errorMsg);
  const [formErrors, setFormErrors] = useState<formDataType | null>(null);
  const [hideInitialError, setHideInitialError] = useState(true);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setFormErrors(validateForm(formData, isSignup));
  }, [formData, isSignup]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setHideInitialError(false);

    if (formErrors) return;

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
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
        {isLoading ? (
          <Loading />
        ) : (
          <div className="form-body">
            <Input
              name="username"
              type="text"
              placeholder="Username"
              autoFocus={true}
              handleChange={handleChange}
              error={formErrors?.username}
              value={formData.username}
              hideInitialError={hideInitialError}
            />

            {isSignup && (
              <Input
                name="email"
                type="email"
                placeholder="Email"
                handleChange={handleChange}
                error={formErrors?.email}
                value={formData.email!}
                hideInitialError={hideInitialError}
              />
            )}

            <Input
              name="password"
              type="password"
              placeholder="Password"
              handleChange={handleChange}
              error={formErrors?.password}
              value={formData.password}
              hideInitialError={hideInitialError}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                handleChange={handleChange}
                error={formErrors?.confirmPassword}
                value={formData.confirmPassword!}
                hideInitialError={hideInitialError}
              />
            )}
            {errorMsg && <Message msg={errorMsg} msgRole={msgType.ERROR} />}

            <Button
              text={isSignup ? 'Create my account' : 'Log in to my account'}
              link={false}
            />

            <hr />

            <LoginSwitch
              isSignup={isSignup}
              setIsSignup={setIsSignup}
              setHideInitialError={setHideInitialError}
            />
          </div>
        )}
      </form>
    </section>
  );
};

export default Auth;

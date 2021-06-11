import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';
//Components
import Input from './Input';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {};
  const handleChange = () => {};

  //Switch between login and signup form
  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, payload: { result, token } });
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log('Google sign in was unsuccessful. Try again later');
  };

  return (
    <section id="auth">
      <div className="auth__bg-overlay"></div>
      <header className="auth__main-header">
        <h1 className="logo">
          <span className="accent-clr">Guitar</span> PA
        </h1>
      </header>
      <form className="auth__form" onSubmit={handleSubmit}>
        <header className="form-header">
          <h2>
            {isSignup ? 'Sign up for ' : 'Log in to '}
            <span className="accent-clr">Guitar</span> PA
          </h2>
        </header>
        <div className="form-body">
          <Input name="username" type="text" placeholder="Username" autofocus />
          {isSignup && (
            <Input name="email" type="email" placeholder="Email" autofocus />
          )}

          <Input
            name="password"
            type="password"
            placeholder="Password"
            autofocus
          />
          {isSignup && (
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              autofocus
            />
          )}

          <button type="submit" className="primary-btn signup-btn">
            {isSignup ? 'Create my account' : 'Log in to my account'}
          </button>

          <GoogleLogin
            clientId="972082015220-v4lucdrooruvraceqvk0dkbvaud02aot.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                type="submit"
                className="secondary-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}>
                <FaGoogle /> Log in with Google
              </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

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

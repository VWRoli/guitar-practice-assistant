import { useState } from 'react';
//Components
import Input from './Input';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = () => {};
  const handleChange = () => {};
  const switchMode = () => {
    setIsSignup(!isSignup);
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

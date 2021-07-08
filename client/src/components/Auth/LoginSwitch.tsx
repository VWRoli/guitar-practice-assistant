import { AuthPropType } from './Auth';

const LoginSwitch: React.FC<AuthPropType> = ({
  isSignup,
  setIsSignup,
}): JSX.Element => {
  return (
    <p className="login-switch" onClick={() => setIsSignup(!isSignup)}>
      {isSignup ? 'Already have an account?' : `Don't have an account?`}{' '}
      <span>{isSignup ? 'Log In' : `Sign Up`}</span>
    </p>
  );
};

export default LoginSwitch;

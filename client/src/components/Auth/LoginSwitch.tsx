import { AuthPropType } from './Auth';

type Props = {
  isSignup: AuthPropType['isSignup'];
  setIsSignup: AuthPropType['setIsSignup'];
  setHideInitialError: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginSwitch: React.FC<Props> = ({
  isSignup,
  setIsSignup,
  setHideInitialError,
}): JSX.Element => {
  const handleClick = () => {
    setIsSignup(!isSignup);
    setHideInitialError(true);
  };

  return (
    <p className="login-switch" onClick={handleClick}>
      {isSignup ? 'Already have an account?' : `Don't have an account?`}{' '}
      <span>{isSignup ? 'Log In' : `Sign Up`}</span>
    </p>
  );
};

export default LoginSwitch;

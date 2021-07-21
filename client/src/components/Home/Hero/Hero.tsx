import Button from '../../utils/Button/Button';
import heroGuitar from '../../../assets/hero.jpg';
import Logo from '../../utils/Logo/Logo';

const Hero = (): JSX.Element => {
  return (
    <section id="landing__hero">
      <div className="landing__hero-wrapper">
        <div className="landing__hero-text">
          <Logo accentText="Guitar" postText="Practice Assistant" />

          <p>
            Completely FREE guitar practice assistant for every guitarist.{' '}
            <br />
            Whether you are just starting out, or playing for years, a great
            <br />
            practice routine helps you to get to the next level.
          </p>

          <Button text="Create a new account" link={true} route="/auth" />
        </div>
        <div className="landing__hero-img-wrapper">
          <img src={heroGuitar} alt="Guitar" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

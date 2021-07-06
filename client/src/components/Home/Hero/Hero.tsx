import Button from '../../utils/Button';
import heroGuitar from '../../../assets/hero.jpg';

const Hero = (): JSX.Element => {
  return (
    <section id="landing__hero">
      <div className="landing__hero-text">
        <h1>
          <span className="accent-clr">Guitar</span> Practice Assistant
        </h1>
        <p>
          Completely FREE guitar practice assistant for every guitarist. <br />
          Whether you are just starting out, or playing for years, a great
          <br />
          practice routine helps you to get to the next level.
        </p>

        <Button text="Create a new account" link={true} route="/auth" />
      </div>
      <div className="landing__hero-img-wrapper">
        <img src={heroGuitar} alt="The App" />
      </div>
    </section>
  );
};

export default Hero;

import Button from '../../utils/Button';
import guitarPlayer from '../../../assets/guitar-player.jpg';

const About = (): JSX.Element => {
  return (
    <section id="landing__about">
      <div>
        <h2>About Guitar Practice Assistant</h2>
        <div className="landing__about-img-wrapper">
          <img src={guitarPlayer} alt="Guitar player" />
        </div>
        <p className="landing__about-text">
          Guitar PA is FREE and easy to use app to help you become the best
          guitarist you can be. Here you will find everything you need for your
          practice sessions. It is built with simplicity in mind so you can
          focus on learning to play.
        </p>
        <h3>Join now</h3>
        <Button text="Create an account" link={true} route="/auth" />
      </div>
    </section>
  );
};

export default About;

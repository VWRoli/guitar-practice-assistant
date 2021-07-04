import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Overview from './Overview/Overview';
import About from './About/About';
import Footer from './Footer/Footer';

type Props = {
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home: React.FC<Props> = ({ setIsSignup }): JSX.Element => {
  return (
    <section id="home">
      <Navbar setIsSignup={setIsSignup} />
      <Hero />
      <Overview />
      <About />
      <Footer />
    </section>
  );
};

export default Home;

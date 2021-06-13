import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Overview from './Overview/Overview';
import About from './About/About';
import Footer from './Footer/Footer';

const Home = ({ setIsSignup }) => {
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

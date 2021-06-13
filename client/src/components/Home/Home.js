import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
import Overview from './Overview/Overview';
import About from './About/About';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <section id="home">
      <Navbar />
      <Hero />
      <Overview />
      <About />
      <Footer />
    </section>
  );
};

export default Home;

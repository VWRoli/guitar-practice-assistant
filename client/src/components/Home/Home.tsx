import { Suspense, lazy } from 'react';
//Components
import Hero from './Hero/Hero';
import Navbar from './Navbar/Navbar';
//import Overview from './Overview/Overview';
//import About from './About/About';
//import Footer from './Footer/Footer';

const Overview = lazy(() => import('./Overview/Overview'));
const About = lazy(() => import('./About/About'));
const Footer = lazy(() => import('./Footer/Footer'));

type Props = {
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home: React.FC<Props> = ({ setIsSignup }): JSX.Element => {
  return (
    <section id="home">
      <Navbar setIsSignup={setIsSignup} />
      <Hero />
      <Suspense fallback={<div />}>
        <Overview />
        <About />
        <Footer />
      </Suspense>
    </section>
  );
};

export default Home;

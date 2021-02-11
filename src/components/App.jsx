import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setLoaded(true)
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      {isLoaded && (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </PortfolioProvider>
  );
}

export default App;

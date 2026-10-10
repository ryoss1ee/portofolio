import React, { useState } from 'react';
import StarBackground from './components/StarBackground';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onComplete={() => setLoading(false)} />
      ) : (
        <main className="relative">
          <StarBackground />
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </main>
      )}
    </>
  );
}

export default App;

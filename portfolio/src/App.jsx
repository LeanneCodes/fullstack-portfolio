import React from 'react';
import { Footer, Intro, Navbar, Projects, Skills, About, Certificates } from './containers'
import './App.css';

function App() {

  return (
    <>
      <div >
        <div>
          <Navbar />
        </div>
        <div>
          <Intro />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Certificates />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

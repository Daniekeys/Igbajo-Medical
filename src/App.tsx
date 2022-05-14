import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Department from './components/Department'
import MedicalService from './components/MedicalService'
import Meet from './components/Meet'
import News from './components/News'
import Help from './components/Help'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MedicalService />
      <About />
      <Department />
      <Meet />
      <News />
      <Help />
      <Footer />
    </div>
  );
}

export default App;

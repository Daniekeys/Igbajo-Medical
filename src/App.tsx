import React from 'react';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Department from './components/Department'
import MedicalService from './components/MedicalService'
import Meet from './components/Meet'
import News from './components/News'
import Help from './components/Help'


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
    </div>
  );
}

export default App;

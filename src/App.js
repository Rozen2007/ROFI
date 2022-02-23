import React from 'react';
// import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';


function App() {
  return (
    <div className="App">
        <Info/>
          <FontConverter />

        <section className="blue">
        <div class="spacer layer2"/>

        <TesseractScan />
        <div class="space layer1"/>
        </section>

        <Footer />
    </div>
  );
}

export default App;

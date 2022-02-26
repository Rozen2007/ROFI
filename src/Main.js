import React from 'react';
import './Main.css';
import FontConverter from './Components/FontConverter/FontConverter';
import Footer from './Components/Footer/Footer';
import Info from './Components/Info/Info';
import TesseractScan from './Components/TesseractScan/TesseractScan';
import SpeechToText from './Components/SpeechToText/SpeechToText';


function Main() {
  return (
    <div className="Main">
          <FontConverter />

        <section className="blue">
        <div class="spacer layer2"/>

        <TesseractScan />
        <SpeechToText/>
        <div class="space layer1"/>
        </section>

        <Footer />
    </div>
  );
}

export default Main;

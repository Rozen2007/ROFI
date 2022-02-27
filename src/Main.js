import React from "react";
import "./Main.css";
import FontConverter from "./Components/FontConverter/FontConverter";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import TesseractScan from "./Components/TesseractScan/TesseractScan";
import SpeechToText from "./Components/SpeechToText/SpeechToText";

function Main() {
  return (
    <div className="Main">
        <Header />
        <FontConverter />
        <section className="blue">
          <div class="spacer layer2" />

          <TesseractScan />
          <SpeechToText />
          <div className="space layer1" />
        </section>

        <Footer />
    </div>
  );
}

export default Main;

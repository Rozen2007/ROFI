import React from "react";
import "./Home.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Outlet, Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="Home">
      <div className="box">
        <header className="header">
          <a className="a">
            <span className="Title">ROFI</span>
          </a>
          <a
            className="Icon"
            href="https://github.com/hhhrrrttt222111/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </header>
        <div className="Container">
          <h1 className="h1">
            The most powerful tool to  convert your
            <div className="text">
              <a className="gradient">Text to handwriting</a>
            </div>
          </h1>
          <p className="description">
            Hate writing assigments? This tool will help you convert your text
            to handwriting 😜
          </p>
          <div className="button_section">
              <a>
                <Link to="main" style={{ textDecoration: 'none' }} className="button_container"> Try now</Link>
              </a>
          </div>
       
          
        </div>
      </div>
    </div>
  );
}


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
            href="https://github.com/Rozen2007/ROFI"
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
            Hate writing assignments? Here we are up with Rofi to make your work easier.
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


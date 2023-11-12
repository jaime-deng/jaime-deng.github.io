import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";


class Intro extends React.Component {
  render() {
    const buttonStyle =
    {
      width: "200px",
      height: "70px",
      fontSize: "20px",
    }
    return (
      
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hi, I'm Jaime Deng</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Full Stack Developer",
                      "Software Developer",
                      "UI Developer - React"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <AwesomeButton style={buttonStyle} className="js-scroll" href="#work" type="primary">View My Work</AwesomeButton>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default Intro;

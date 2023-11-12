import React from "react";

import ButtonView from "./button.jsx"

//import stock
import stock from "../img/wondernote.png";
import stock1 from "../img/jaimebot.png";
import stock2 from "../img/smack.png";

class Portfolio extends React.Component {
  render() {

    const btnView= {
      marginTop: 0,
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center'
    }
    const bottomMarginNone = {
      marginBottom: 0
    }

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Below are a list of some of my personal projects!
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div style={bottomMarginNone} className="work-box">
                <a href={stock} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">WonderNote</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            EJS, CSS3, Bootstrap, NodeJS, ExpressJS, MongoDB
                          </span>
                        
                          <p>This project is a note-taking application build with a NodeJS and MongoDB backend, accompanied with an EJS and CSS front end </p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                
              </div>
              <ButtonView link={"https://wondernote-idsp.herokuapp.com"}/>
            </div>

            <div className="col-md-4">
              <div style={bottomMarginNone} className="work-box">
                <a href={stock1} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock1} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">JaimeBot</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            NodeJS, Node-DiscordAPI, Node-Google Search API, Node-YoutubeAPI 
                          </span>
                          <p>JaimeBot is a bot for discord I created using a collection of APIs and NodeJS. This bot can be used as a music player inside of voice channels, as well as kicking/banning different users through command-based interactions inputted in your servers' text channels.</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>

                  </div>
                </a>
                <a
                  href={stock2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >.</a>

                
              </div>
              <ButtonView link="https://discord.com/oauth2/authorize?client_id=746597731753132134&scope=bot&permissions=2147483647"/>
            </div>

            <div className="col-md-4">
              <div style={bottomMarginNone} className="work-box">
                <a href={stock2} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock2} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Smack</h2>
                        <div className="w-more">
                          <span className="w-ctegory">
                            EJS CSS3 Bootstrap NodeJS ExpressJS MySQL
                          </span>
                          <p>This project is a messenger web application built with an EJS and CSS front end along with a NodeJS and ExpressJS backend.</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
              <ButtonView link="https://smackwebapp.herokuapp.com"/>
            </div>

            
            
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

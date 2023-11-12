import React from "react";
import PhotoMe from "../img/photo-me.JPG";

// **change photo, already added in .img.photo-me-new**

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML5/EJS", porcentage: "86%", value: "86" },
        { id: "CSS3_skill", content: "CSS3", porcentage: "90%", value: "95" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "NodeJS_skill", content: "NodeJS", porcentage: "90%", value: "90" },
        {
          id: "ReactJS_skill",
          content: "ReactJS/React Native",
          porcentage: "86%",
          value: "86"
        },
        {
          id: "ExpressJS_skill",
          content: "ExpressJS",
          porcentage: "86%",
          value: "86"
        },
        {
          id: "Python_skill",
          content: "Python",
          porcentage: "75%",
          value: "75"
        },
        {
          id:"C#_skill",
          content:"C#",
          porcentage: "75%",
          value:"75"
        },
        {
        id:"Database Technologies_skill",
        content:"Database Technologies",
        porcentage: "75%",
        value:"75"
      },
        {
          id: "Figma_skill",
          content: "Figma",
          porcentage: "75%",
          value: "75"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Web applications and software developer with a strong interest in marketing, communications, and biology."
        },
        {
          id: "second-p-about",
          content:
            "I'm a passionate developer who strives in creating visually appealing interfaces to accompany server-side functionalities. I possess a consistent willingness to pick up new skills as well as enhance my pre-existing skills through self and collaborative learning. With the ability to familiarize myself with various concepts and skills in brief periods of time, I am a strong team player who focuses on adapting to perform exceptionally with those around me, aiming to produce the highest quality products."
        },
        // {
        //   id: "third-p-about",
        //   content:
        //     "Lorem ipsum pariatur consectetur laboris occaecat nulla aliqua irure ad deserunt duis. Eiusmod nulla cupidatat labore sint sit aute dolore irure nostrud ut incididunt. Anim laborum reprehenderit labore magna ut dolore quis irure. Labore ea duis deserunt ullamco irure fugiat deserunt ut nisi ea minim proident. Nisi consectetur do non magna duis aliqua minim minim veniam. In occaecat minim qui consequat elit mollit consectetur non id tempor. Amet adipisicing occaecat tempor culpa quis est duis."
        // }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center", height:"500px", width:"400px", marginRight:"300px", paddingRight:"10px" }}
                        >
                          <img
                          
                            className="img-fluid rounded b-shadow-a"
                            alt="PhotoMe"
                            src={PhotoMe}
                            style={{paddingRight:"50px"}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

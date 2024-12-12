import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "./new.css";
// import ScoreIndicator from "./rating";
import CircularProgress from "./circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputerMouse } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Ensure your CSS file exists and is correct

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const discussRef = useRef(null);
  const abtRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle dropdown
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { skill: "Website Development", percentage: 96 },
    { skill: "App Development", percentage: 82 },
    { skill: "Shopify Development", percentage: 98 },
    { skill: "Database Management", percentage: 89 },
    { skill: "Server Managment", percentage: 96 },
  ];

  //    const downloadPDF = () => {
  //      const pdfPath = process.env.PUBLIC_URL + "/documents/example.pdf"; // Path to your PDF file
  //      const link = document.createElement("a");
  //      link.href = pdfPath;
  //      link.download = "example.pdf"; // Name of the file when downloaded
  //      link.click();
  //    };

  return (
    <div>
      <div className="resume-container">
        <div className="navbar2">
          <div className="dev">Software Engineer</div>

          {/* Hamburger icon that appears on small screens */}
          <div className="hamburger" onClick={toggleMenu}>
            &#9776; {/* Unicode for hamburger icon */}
          </div>

          {/* Tabs for the navbar, which are conditionally shown based on screen size and state */}
          <div className={`tabs ${isOpen ? "open" : ""}`}>
            <ul className="tab-btn">
              <li onClick={() => scrollToSection(homeRef)}>
                <Link to="/" onClick={() => setIsOpen(false)} className="link">
                  Home
                </Link>
              </li>
              <li onClick={() => scrollToSection(projectsRef)}>
                <Link to="/" onClick={() => setIsOpen(false)} className="link">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  onClick={() => setIsOpen(false)}
                  className="link"
                >
                  Resume
                </Link>
              </li>

              <li onClick={() => scrollToSection(aboutRef)}>
                <Link to="/" onClick={() => setIsOpen(false)} className="link">
                  About Us
                </Link>
              </li>
              <li
                onClick={() => scrollToSection(discussRef)}
                className="contact-li"
              >
                Contact Us
              </li>
            </ul>
          </div>

          <div
            className="contact-nav"
            onClick={() => scrollToSection(discussRef)}
          >
            <a
              href="tel:7428040855"
              style={{ textDecoration: "none", color: "rgb(15, 62, 46)" }}
            >
              Contact Us
            </a>
            <img src="/arrow.png" alt="arw" className="arw-1"></img>
          </div>
        </div>

        <div className="resume">
          Resume
          <FontAwesomeIcon
            icon={faComputerMouse}
            className="mouse"
            onClick={() => scrollToSection(abtRef)}
          />
        </div>
      </div>

      <div className="project1" ref={abtRef}>
        About Me
      </div>
      <div className="res-container">
        <div className="abt">
          <img src="profile.jpg" className="pp" alt="profile"></img>
          <div className="res-text">
            Passionate Full-Stack Developer with expertise in Vue.js, React.js,
            PHP, JavaScript, SASS (CSS Framework), SQL, and Kotlin. I excel at
            creating robust web and mobile applications. Holding a Bachelor of
            Vocational Studies in Software Development from the Integrated
            Institute of Technology, I am dedicated to delivering high-quality,
            user-friendly solutions. Let's connect and collaborate on innovative
            projects!
          </div>
        </div>

        <div className="res-info">
          <div className="label">
            <span className="res-name">Name:</span>Dev Sindhwani
          </div>
          <div className="label">
            <span className="res-name">Age:</span>24
          </div>
          <div className="label">
            <span className="res-name">Job:</span>Software Analyst
          </div>
          <div className="label">
            <span className="res-name">Citizenship:</span>India
          </div>
          <div className="label">
            <span className="res-name">Residence:</span>Delhi
          </div>
          <div className="label">
            <span className="res-name">Email:</span>
            <a href="mailto:dev16sindh@gmail.com" className="decoration-none">
              dev16sindh@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="res-container-resume">
        <a href="/DevResume.pdf" target="_new">
          <button type="button" className="mbt-4">
            {" "}
            Download Resume
          </button>
        </a>
      </div>

      <div className="project1"> Experience</div>
      <div className="timeline-container">
        <div className="exp-container">
          <div className="t1">Work Experience</div>
          <div className="company">Novative Solutions Pvt Ltd (Oas36ty)</div>
          <div className="Year">July,2022 - Present</div>
          <div className="designation">Software Analyst</div>
          <div className="time-info">
            Developed Automation tool and SASS application! Integrate GMAIL
            System in our product!
            <br />
            Implemented Comment system in our product! Implemented Google Drive
            authentication and saving files to google drive! Implemented
            Multi-tenancy Architecture in our product! Worked as Team Leader in
            the company
          </div>

          <div className="company">Brandshark</div>
          <div className="Year">January, 2022 - March, 2022</div>
          <div className="designation">Mobile Application Developer</div>
          <div className="time-info">
            Developed database and coded user input frontend. Responsible for
            day-to-day system operation, daily scrum and interacted with the
            client for requirement execution and sometimes gathering. Google
            Analytics, Youtube, Gmail API Integrations. Worked on Vue JS for
            creating User friendly UI.
          </div>

          <div className="company">Uipro Corporation</div>
          <div className="Year">October, 2021 - January, 2022</div>
          <div className="designation">Laravel Developer</div>
          <div className="time-info">
            Full-life cycle web development experience using PHP and MYSQL.
            Regularly checked deployed code for bugs, errors. Coordinated with
            the team for more understanding and brainstorming of the project
            knowledge.
          </div>
        </div>

        <div className="exp-container">
          <div className="t1">Education</div>
          <div className="year">
            Bachelor Of Vocational Studies in Software Development (BCA)
          </div>
          <div className="designation">Integrated Institute of Technology</div>
          <div className="time-info">01/2021 - 05/2023</div>

          {/*<div className="Year">2021-Present</div>
                        <div className="designation">Software Engineer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>*/}

          {/*<div className="Year">2019</div>
                        <div className="designation">Freelancer</div>
                        <div className="time-info">I work as a Senior software developer at Brandshark in Bangalore, A company that provides exceptional IT services and products. I have gotten the opportunity to get involved with various exciting projects like Trustayur, Lanceark, and Third Wave Coffee.</div>*/}
        </div>
      </div>

      <div className="project1">Skills</div>
      {/*ratings*/}
      {/*  
                <div className="rating-container">
                    <div className="lang-container">
                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                        <div className="lang">HTML
                            <ScoreIndicator score={7} />
                        </div>

                    </div>
                </div>
                */}

      {/***Coding SKills ***/}
      <div
        style={{ display: "flex", gap: "20px" }}
        className="coding-container"
      >
        {skills.map((skill, index) => (
          <CircularProgress
            key={index}
            skill={skill.skill}
            percentage={skill.percentage}
          />
        ))}
      </div>

      {/**KNOWLEDGEE */}

      {
        //   <div className="project1">Knowledge</div>
        //   <div className="know-container">
        //     <div className="devlop">
        //       {" "}
        //       <FontAwesomeIcon icon={faCheck} className="tick" />
        //       Website Development
        //     </div>
        //     <div className="devlop">
        //       {" "}
        //       <FontAwesomeIcon icon={faCheck} className="tick" />
        //       App Development
        //     </div>
        //     <div className="devlop">
        //       {" "}
        //       <FontAwesomeIcon icon={faCheck} className="tick" />
        //       Webapp Development
        //     </div>
        //     <div className="devlop">
        //       {" "}
        //       <FontAwesomeIcon icon={faCheck} className="tick" />
        //       Shopify Development
        //     </div>
        //     <div className="devlop">
        //       {" "}
        //       <FontAwesomeIcon icon={faCheck} className="tick" />
        //       Database Management
        //     </div>
        //     <div className="devlop">
        //       {" "}
        //       <FontAwesomeIcon icon={faCheck} className="tick" />
        //       User Interface/User Experience
        //     </div>
        //   </div>
      }

      {/**My services */}
      {/* 
          
          
      <div className="project1">Services</div>
      <div className="ser-container">
        <div className="ser">
          <div className="service">
            <div className="front">Front-end</div>
            <div className="f-abt">
              Front-end web development enhances the look and touches of your
              website through a graphical user interface.
            </div>
          </div>

          <div className="service">
            <div className="front">Back-end</div>
            <div className="f-abt">
              Back-end web development infuses the logic in your website to make
              it alive and helps in a dynamic experience.
            </div>
          </div>

          <div className="service">
            <div className="front">Android-Development</div>
            <div className="f-abt">
              Android app development is the process of creating mobile apps for
              devices that run the Android operating system.
            </div>
          </div>

          <div className="service">
            <div className="front">Shopify-Development</div>
            <div className="f-abt">
              Shopify is a complete commerce platform that lets you start, grow,
              and manage a business.
            </div>
          </div>
        </div>
          </div>
          */}

      <div className="footer-container">
        <div className="footer">
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/dev-sindhwani-297b481b1/"
              style={{ color: "black", textDecoration: "none" }}
              target="__blank"
            >
              <FontAwesomeIcon icon={faLinkedin} />{" "}
              <span className="text-f">Linkedin</span>
            </a>
          </div>
          <div className="Email">
            <a
              href="mailto:dev16sindh@gmail.com"
              style={{ color: "black", textDecoration: "none" }}
              target="__blank"
            >
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <span className="text-f">dev16sindh@gmail.com</span>
            </a>
          </div>
          <div className="Git">
            <a
              href="https://github.com/dev1662"
              style={{ color: "black", textDecoration: "none" }}
              target="__blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="text-f">Github</span>
            </a>
          </div>
        </div>

        <div className="copyright">
          All rights reserved <FontAwesomeIcon icon={faCopyright} /> 2024
        </div>
      </div>
    </div>
  );
};

export default Resume;

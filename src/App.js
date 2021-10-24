import React from 'react';
import './index.css';

function App() {
  return (
    <div className="AboutPage">
      <div className="profileImage">
        <div className="aboutPageOverlay">
          <p>Hey I'm Adeyemi Kolade</p>
          <p>
            Innovative Frontend Developer, experienced in building and
            maintaining responsive websites. Proficient in HTML, CSS,
            JavaScript, React, React Native and Node js
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/theophillysg/"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/theophilly"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/theodasa"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="contentSection">
        <div>
          <span className="titleSpan">Intro</span>
          <hr style={{ width: 25 }}></hr>
          <ul>
            <p className="innerp">
              I’m Kolade, a web-developer based in Nigeria. I love creating
              beautiful websites to provide intuitive and dynamic experience to
              users.
            </p>
            <p className="innerp">
              Since I learnt to code, I have always felt in love with the art of
              programming. The possibility of writing code from one tiny corner
              of the world to create applications which can be beneficial to
              people all around the world is an empowering experience.
            </p>
            <p className="innerp">
              Beside programming, I love travelling, spending time with my
              family, reading books and playing football.
            </p>
            <p className="innerp yellow">
              I'm currently looking for my first entry level opportunity as a
              software developer
            </p>
          </ul>
        </div>
        <div>
          <span className="titleSpan">Skills</span>
          <hr style={{ width: 26 }}></hr>
          <ul>
            <li>
              <p className="innerp">
                <span className="innerSpan">LANGUAGES:</span> JavaScript (ES6),
                HTML5, CSS3
              </p>
            </li>
            <li>
              <p className="innerp">
                <span className="innerSpan">LIBRARIES & FRAMEWORKS:</span>{' '}
                jQuery, Bootstrap, Chakra UI, Node, React Native MongoDB,
                Wordpress Express, React
              </p>
            </li>
            <li>
              <p className="innerp">
                <span className="innerSpan">TOOLS:</span> Git & Github, Command
                Line, Postman, Adobe XD
              </p>
            </li>
          </ul>
        </div>

        <div>
          <span className="titleSpan">PROJECTS</span>
          <hr></hr>
          <ul>
            <li>
              <p className="innerp">
                <span className="projectSpan">myportfolio</span>
                I’m a Kolade, web-developer based on Nigeria. I love creating
                beautiful websites to provide intuitive and dynamic experience
                to our users.
              </p>
              <p className="innerp">
                <span className="projectSpan">247 Nigerian News: </span>
                An andriod App which provides current news in Nigeria, It
                fetches news from different sources using Wordpress REST API.
                Written in JavaScript using React Native. Access it on playstore
                using the link above
              </p>
              <p className="innerp">
                <span className="projectSpan">Advicebox</span>
                Web app built on the MERN (MongoDB, Express, React, Node) stack
                for my web development class. It uses Redux for the state
                management and Chakra UI as component library. Created with the
                intention of allowing registered users drop advices under
                different advice categories.
              </p>
              <p className="innerp">
                <span className="projectSpan">Educator</span>
                Educator is a Single page React website for an imaginary
                instution.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <form
            style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
            action="./cv.pdf"
          >
            <button>
              <i className="fas fa-file"></i>my resume
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

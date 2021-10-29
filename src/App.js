import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './index.css';

function App() {
  Aos.init();
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
          <span
            className="titleSpan"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Intro
          </span>
          <hr
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{ width: 25 }}
          ></hr>
          <ul>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="innerp">
                I’m Kolade, a web-developer based in Nigeria. obsessed with
                solving complex problems using React, MongoDB, and Node by
                building web applications with an emphasis on accessibility and
                usability.
              </p>
              <p className="innerp">
                Since I learnt to code, I have always felt in love with the art
                of programming. The possibility of writing code from one tiny
                corner of the world to create applications which can be
                beneficial to people all around the world is an empowering
                experience.
              </p>
            </div>
            <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
              Beside programming, I love travelling, spending time with my
              family, reading books and playing football.
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="innerp yellow"
            >
              I'm currently looking to contribute my skills to a team where I
              can prove my skills while growing in my capabilities. If you are
              looking for a competent, highly-motivated developer, let's chat.
              You can reach me at theophilly20@gmail.com or by DMing me here on
              LinkedIn.
            </p>
          </ul>
        </div>
        <div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <span className="titleSpan">Skills</span>
            <hr style={{ width: 26 }}></hr>
          </div>
          <ul>
            <li>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
                <span className="innerSpan">LANGUAGES:</span> JavaScript (ES6),
                HTML5, CSS3
              </p>
            </li>
            <li>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
                <span className="innerSpan">LIBRARIES & FRAMEWORKS:</span>{' '}
                React, Node, Express, React Native, Material UI, Chakra UI,
                Socket IO, MongoDB, Wordpress,
              </p>
            </li>
            <li>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
                <span className="innerSpan">TOOLS:</span> Git & Github, Command
                Line, Postman, Adobe XD
              </p>
            </li>
          </ul>
        </div>

        <div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <span className="titleSpan">PROJECTS</span>
            <hr></hr>
          </div>
          <ul>
            <li>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
                <span className="projectSpan">myportfolio</span>
                I’m a Kolade, web-developer based on Nigeria. I love creating
                beautiful websites to provide intuitive and dynamic experience
                to our users.
              </p>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
                <span className="projectSpan">247 Nigerian News: </span>
                An andriod App which provides current news in Nigeria, It
                fetches news from different sources using Wordpress REST API.
                Written in JavaScript using React Native. Access it on playstore
                using the link above
              </p>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
                <span className="projectSpan">Advicebox</span>
                Web app built on the MERN (MongoDB, Express, React, Node) stack
                for my web development class. It uses Redux for the state
                management and Chakra UI as component library. Created with the
                intention of allowing registered users drop advices under
                different advice categories.
              </p>
              <p data-aos="fade-up" data-aos-duration="1000" className="innerp">
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

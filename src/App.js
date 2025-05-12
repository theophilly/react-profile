import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./index.css";

function App() {
  Aos.init();
  return (
    <div className="AboutPage">
      <div className="profileImage">
        <div className="aboutPageOverlay">
          <p>Hey I'm Kolade Adeyemi</p>
          <p>
            Innovative software Engineer, experienced in building and
            maintaining responsive websites and mobile applications. Proficient
            in HTML, CSS, JavaScript, React, React Native and Node js
          </p>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="www.linkedin.com/in/adeyemi-kolade"
            >
              <i class="fab fa-linkedin"></i>
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
        <div data-aos="fade-up" data-aos-duration="1000">
          <span className="titleSpan">About Me</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>
          <p className="innerp" data-aos="fade-up" data-aos-duration="1000">
            Hi, I’m Kolade Adeyemi, an innovative Software Developer based in
            Osun State, Nigeria, with over 5 years of experience. I specialize
            in designing and developing a wide range of applications, from
            Single-Page Applications and PWAs to Mobile Applications.
          </p>
          <p className="innerp" data-aos="fade-up" data-aos-duration="1000">
            I'm passionate about solving complex problems and building
            user-friendly web and mobile solutions with a strong emphasis on
            accessibility, usability, and performance. My expertise lies in
            using modern technologies like React, Next.js, Remix, React Native,
            Node.js, and TypeScript to create optimized and impactful digital
            experiences.
          </p>
          <p className="innerp" data-aos="fade-up" data-aos-duration="1000">
            Since I learned to code, I've been captivated by the art of
            programming. The ability to write code that creates applications
            beneficial to people worldwide is an incredibly empowering
            experience. I thrive in Agile environments (Scrum & Kanban) and have
            a proven track record of leading projects to successful completion.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "30px" }}
        >
          <span className="titleSpan">Professional Experience</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>

          <div
            className="experience-entry"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="job-header">
              <span className="job-title">
                Senior Software Engineer (Tech Lead)
              </span>
              <p className="company-details">Cognith, Singapore (Remote)</p>
              <span className="job-duration">
                May 2023 - Present (Promoted to Tech Lead: Feb 2024)
              </span>
            </div>
            <ul className="responsibilities-list innerp">
              <li>
                Guide and mentor new front-end engineers, developing and
                conducting onboarding sessions.
              </li>
              <li>
                Act as the primary point of contact for the frontend team,
                offering day-to-day support and resolving technical issues.
              </li>
              <li>
                Conduct technical interviews and collaborate with HR to refine
                the hiring process for frontend roles.
              </li>
              <li>
                Expertly convert Figma designs into responsive, production-ready
                React Native components.
              </li>
              <li>
                Optimize app performance by profiling and identifying
                bottlenecks, ensuring a smooth user experience.
              </li>
              <li>
                Improve Developer Experience (DX) by 15% through writing unit
                and integration tests (Jest, RTL), reducing bugs by 25%.
              </li>
              <li>
                Optimize components for maximum performance across devices using
                custom hooks (Atomic design), improving site performance by 30%.
              </li>
            </ul>
          </div>

          <div
            className="experience-entry"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="job-header">
              <span className="job-title">Frontend Developer</span>
              <p className="company-details">
                Lasting Dynamics SLU, Italy (Remote)
              </p>
              <span className="job-duration">August 2022 - May 2023</span>
            </div>
            <ul className="responsibilities-list innerp">
              <li>
                Migrated legacy React class components and JavaScript to a
                modern stack (React stateless components, Tailwind UI, Styled
                Components, Storybook, Ant Design), enhancing code readability
                and reducing new developer adaptation time by 15%.
              </li>
              <li>
                Conducted Jest testing for reusable components and APIs,
                reducing QA and user-reported bugs by 30%.
              </li>
              <li>
                Improved front-end architecture, leading to a 25% increase in
                code maintainability.
              </li>
              <li>
                Developed a B2B e-commerce website and mobile app (Next.js,
                React Native, TailwindCSS), achieving a 10% increase in company
                revenue.
              </li>
              <li>
                Developed a PWA application with Next.js, resulting in a 30%
                increase in mobile user engagement.
              </li>
              <li>
                Rebuilt React.js front-end in Next.js, TypeScript, and Tailwind
                CSS, reducing code boilerplate by 30%.
              </li>
              <li>
                Revamped React.js web applications to Next.js for SEO (Helmet),
                increasing site traffic by 20%.
              </li>
            </ul>
          </div>

          <div
            className="experience-entry"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="job-header">
              <span className="job-title">Lead Frontend Engineer</span>
              <p className="company-details">
                Kokoruns International, Lagos, Nigeria
              </p>
              <span className="job-duration">November 2021 - July 2022</span>
            </div>
            <ul className="responsibilities-list innerp">
              <li>
                Developed a mobile-first e-commerce platform (React Native,
                custom CMS), increasing sales by 25% and reducing development
                time by 20%.
              </li>
              <li>
                Utilized RESTful APIs and OAuth2 for secure third-party service
                integrations.
              </li>
              <li>
                Troubleshot interface software and debugged application codes,
                improving functionality and performance by 50%.
              </li>
              <li>
                Collaborated with UX designers to create a seamless mobile-first
                user experience, increasing user engagement by 20% and
                conversions by 15%.
              </li>
            </ul>
          </div>

          <div
            className="experience-entry"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="job-header">
              <span className="job-title">Frontend Engineer</span>
              <p className="company-details">
                LaurenInc Partners Limited, Lagos, Nigeria
              </p>
              <span className="job-duration">
                November 2020 - November 2021
              </span>
            </div>
            <ul className="responsibilities-list innerp">
              <li>
                Integrated four backend microservices via a gateway, reducing
                infrastructure costs by 40%.
              </li>
              <li>
                Optimized front-end performance (Vite, JPEGmini), increasing
                website loading speed by 40% during development and overall
                end-user satisfaction by 15%.
              </li>
              <li>
                Built cross-browser compatible websites, achieving 22% faster
                load times.
              </li>
              <li>
                Handled complex state management using Redux and TypeScript,
                significantly improving user state handling.
              </li>
              <li>
                Cleaned and improved the design system with Tailwind CSS for a
                consistent app structure.
              </li>
            </ul>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "30px" }}
        >
          <span className="titleSpan">Key Achievements</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>
          <ul
            className="key-achievements-list innerp"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <li>Promoted to Tech Lead at Cognith (Feb 2024).</li>
            <li>
              Awarded "Employee of the Year" at Cognith for outstanding
              performance and leadership.
            </li>
            <li>
              Successfully led and contributed to the completion of 12+ projects
              at Cognith.
            </li>
            <li>
              Consistently reduced production bugs by up to 80% through robust
              testing (Jest, RTL, Cypress).
            </li>
            <li>
              Achieved significant performance improvements in various
              applications (e.g., 30% site performance, 40% loading speed).
            </li>
            <li>
              Contributed to revenue increases (e.g., 10% at Lasting Dynamics,
              25% at Kokoruns).
            </li>
            <li>
              Enhanced user engagement across multiple projects (e.g., 30%
              mobile engagement, 20% general user engagement).
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "30px" }}
        >
          <span className="titleSpan">Technical Skills</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>
          <ul>
            <li data-aos="fade-up" data-aos-duration="1000">
              <p className="innerp">
                <span className="innerSpan">
                  PROFICIENT LANGUAGES & FRAMEWORKS:
                </span>{" "}
                TypeScript, Node.js, React.js, Next.js, React Native, Remix,
                Webpack, SCSS, TailwindCSS, Bootstrap, GraphQL.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              <p className="innerp">
                <span className="innerSpan">EXPERIENCED LANGUAGES:</span>{" "}
                JavaScript (ES6+), Java.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              <p className="innerp">
                <span className="innerSpan">DATABASES:</span> PostgreSQL, MySQL,
                MongoDB, Firebase, Redis.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              <p className="innerp">
                <span className="innerSpan">TOOLS:</span> Git & Github, Nx,
                Jira, Vite, ES6, Web Sockets, Linux, Command Line, Postman.
              </p>
            </li>
            <li data-aos="fade-up" data-aos-duration="1000">
              <p className="innerp">
                <span className="innerSpan">TESTING:</span> Jest, React Testing
                Library (RTL), Cypress.
              </p>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "30px" }}
        >
          <span className="titleSpan">Projects</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>
          <ul>
            <li
              className="experience-entry"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="innerp">
                <span className="projectSpan">
                  Naija Daily (Personal Project, 2024)
                </span>
                <br />A mobile Nigerian news application built using React
                Native and TypeScript. Features real-time news updates, content
                aggregation, category filtering, and personalized user
                preferences.
              </p>
              <p
                className="innerp project-links"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.naijaDaily"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Play Store
                </a>
                <a
                  href="https://apps.apple.com/us/app/naija-daily-all-nigerian-news/id6504704290"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on App Store
                </a>
              </p>
            </li>
            <li
              className="experience-entry"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="innerp">
                <span className="projectSpan">
                  Omne By FWD (Contribution at Lasting Dynamics, 2023)
                </span>
                <br />
                Contributed as a core development team member to a mobile
                insurance and lifestyle app for FWD, built with React Native and
                TypeScript. Served over 10 million users across Asia, focusing
                on feature implementation, performance optimization, and user
                experience.
              </p>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "30px" }}
        >
          <span className="titleSpan">Education</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>

          <p className="innerp">
            Diploma in Computer Science
            <br />
            Federal Polytechnic, Offa, Nigeria (2013 - 2019)
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ marginTop: "30px" }}
        >
          <span className="titleSpan">Interests & Let's Connect</span>
          <hr
            className="title-hr"
            data-aos="fade-up"
            data-aos-duration="1000"
          ></hr>
          <p className="innerp" data-aos="fade-up" data-aos-duration="1000">
            Besides programming, I love travelling, spending quality time with
            my family, reading insightful books, and playing football.
          </p>
          <p
            className="innerp yellow"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            I'm passionate about building innovative solutions and always open
            to exploring new opportunities and collaborations. If you have an
            interesting project, a challenging problem to solve, or are looking
            for a dedicated and skilled developer, I'd love to connect and
            discuss how we can work together!
          </p>
          <p
            className="innerp contact-links"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            You can reach me at:{" "}
            <a href="mailto:theophilly20@gmail.com">theophilly20@gmail.com</a> |
            Phone: <a href="tel:+2347069507640">+234 706 950 7640</a> |
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/adeyemi-kolade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              adeyemi-kolade
            </a>
          </p>
        </div>

        <div
          style={{ marginTop: "40px", marginBottom: "20px" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {/* <form
            style={{ width: "100%", justifyContent: "center", display: "flex" }}
            action="./Adeyemi Kolade Resume.pdf"
            method="get"
            target="_blank"
          >
            <button type="submit">
              <i className="fas fa-file" style={{ marginRight: "8px" }}></i>View
              My Resume
            </button>
          </form> */}
        </div>
      </div>
    </div>
  );
}

export default App;

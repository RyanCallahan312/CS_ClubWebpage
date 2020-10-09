import React from "react";
import PropTypes from "prop-types";
import Interactive from "react-interactive";
import { HashLink as Link } from "react-router-hash-link";
import { About, Event, Contact, NavSys } from "./exporter";
import "./ScrollingSys.css";

const propTypes = {
  location: PropTypes.object.isRequired,
};

function ScrollingSys({ location }) {
  const h2Style = {
    fontSize: "22px",
  };
  const h3Style = { fontSize: "18px", marginTop: "2.5vh" };

  return (
    <div className="badyDev">
      {/** */}

      <section id="About">
        <NavSys />
        <h2 style={h2Style}>About</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <li>
            <Interactive as={Link} to="/"></Interactive>
          </li>
          <li>
            <Interactive
              as={Link}
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              to={`${location.pathname}#Event`}
            ></Interactive>
          </li>

          <li>
            <Interactive
              as={Link}
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              to={`${location.pathname}#Contact`}
            ></Interactive>
          </li>
        </ul>{" "}
        {/** First ul closed */}
        <About />
      </section>
      {/*---------------------------------------------------------------------------------*/}

      <section id="Event">
        <h2 style={h2Style}>Events</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <li>
            <Interactive as={Link} to="/"></Interactive>
          </li>
          <li>
            <Interactive
              as={Link}
              smooth
              to={`${location.pathname}#About`}
            ></Interactive>
          </li>
          <li>
            <Interactive
              as={Link}
              smooth
              to={`${location.pathname}#Contact`}
            ></Interactive>
          </li>
        </ul>{" "}
        {/** Second ul closed */}
        <Event />
      </section>
      {/*--------------------------------------------------------------------------------------------------------------------*/}

      <section id="Contact">
        <ul>
          <li>
            <Interactive as={Link} to="/"></Interactive>
          </li>
          <li>
            <Interactive as={Link} smooth to={`${location.pathname}#About`}>
              About
            </Interactive>
          </li>
          <li>
            <Interactive as={Link} smooth to={`${location.pathname}#Event`}>
              Event
            </Interactive>
          </li>
        </ul>{" "}
        {/** Third ul closed */}
        <Contact />
      </section>
    </div>
  );
}

ScrollingSys.propTypes = propTypes;

export default ScrollingSys;

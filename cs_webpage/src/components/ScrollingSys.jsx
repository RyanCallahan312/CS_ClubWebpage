import React from "react";
import PropTypes from "prop-types";
import Interactive from "react-interactive";
import { HashLink as Link } from "react-router-hash-link";
import { About, Event, Contact } from "./exporter";
import "./ScrollingSys.css";
import objectAssign from "object-assign";

const propTypes = {
  location: PropTypes.object.isRequired,
};

function ScrollingSys({ location }) {
  const h2Style = {
    fontSize: "22px",
  };
  const h3Style = { fontSize: "18px", marginTop: "2.5vh" };

  return (
    <div>
      {/** 
      <NavSys style={{ visibility: "hidden" }} />
      */}
      <section style={objectAssign({ backgroundColor: "#E0E0E0" })} id="About">
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <li>
            <Interactive as={Link} to="/">
              {" "}
              Home
            </Interactive>
          </li>
          <li>
            <Interactive
              as={Link}
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              to={`${location.pathname}#Event`}
            >
              Event
            </Interactive>
          </li>

          <li>
            <Interactive
              as={Link}
              scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
              to={`${location.pathname}#Contact`}
            >
              Contact
            </Interactive>
          </li>
        </ul>{" "}
        {/** First ul closed */}
        <About />
      </section>
      {/*---------------------------------------------------------------------------------*/}

      <section style={objectAssign({ backgroundColor: "#D0D0D0" })} id="Event">
        <h2 style={h2Style}>Events</h2>
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <li>
            <Interactive as={Link} to="/">
              Home
            </Interactive>
          </li>
          <li>
            <Interactive as={Link} smooth to={`${location.pathname}#About`}>
              About
            </Interactive>
          </li>
          <li>
            <Interactive as={Link} smooth to={`${location.pathname}#Contact`}>
              Contact
            </Interactive>
          </li>
        </ul>{" "}
        {/** Second ul closed */}
        <Event />
      </section>
      {/*--------------------------------------------------------------------------------------------------------------------*/}

      <section
        style={objectAssign({ backgroundColor: "#C0C0C0" })}
        id="Contact"
      >
        <h3 style={h3Style}>Go to:</h3>
        <ul>
          <li>
            <Interactive as={Link} to="/">
              Home
            </Interactive>
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

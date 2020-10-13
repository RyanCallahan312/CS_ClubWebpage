import React, { useState } from "react";
import PropTypes from "prop-types";
import Interactive from "react-interactive";
import { HashLink as Link } from "react-router-hash-link";
import { About, Event, Contact, Menu } from "./exporter";
import "./ScrollingSys.css";
import objectAssign from "object-assign";

const propTypes = {
  location: PropTypes.object.isRequired,
};

function ScrollingSys({ location }) {
  const [clicked, setclicked] = useState(false);
  const handleClick = () => {
    setclicked(!clicked);
  };
  return (
    <div>
      {/** 
      <NavSys style={{ visibility: "hidden" }} />
      */}
      <section style={objectAssign({ backgroundColor: "#E0E0E0" })} id="About">
        <div onClick={handleClick}>
          <h3>Go to:</h3>
          <div className={clicked ? "arr-left" : "square"}></div>
        </div>
        <ul className={clicked ? "Ul-on" : "Ul-off"}>
          {Menu.map((menuItems, index) => {
            return (
              <li key={index}>
                <Interactive
                  as={Link}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  to={`${menuItems.path}`}
                >
                  {menuItems.name}
                </Interactive>
              </li>
            );
          })}
        </ul>
        {/** First ul closed */}
        <About />
      </section>
      {/*---------------------------------------------------------------------------------*/}

      <section style={objectAssign({ backgroundColor: "#D0D0D0" })} id="Event">
        <div onClick={handleClick}>
          <h3>Go to:</h3>
          <div className={clicked ? "arr-left" : "square  "}></div>
        </div>
        <ul className={clicked ? "Ul-on" : "Ul-off"}>
          {Menu.map((menuItems, index) => {
            return (
              <li key={index}>
                <Interactive as={Link} smooth to={`${menuItems.path}`}>
                  {menuItems.name}
                </Interactive>
              </li>
            );
          })}
        </ul>

        <Event />
      </section>
      {/*--------------------------------------------------------------------------------------------------------------------*/}

      <section
        style={objectAssign({ backgroundColor: "#C0C0C0" })}
        id="Contact"
      >
        <div onClick={handleClick}>
          <h3>Go to:</h3>
          <div className={clicked ? "arr-left" : "square"}></div>
        </div>

        <ul className={clicked ? "Ul-on" : "Ul-off"}>
          {Menu.map((menuItems, index) => {
            return (
              <li key={index}>
                <Interactive as={Link} smooth to={`${menuItems.path}`}>
                  {menuItems.name}
                </Interactive>
              </li>
            );
          })}
        </ul>
        {/** Third ul closed */}
        <Contact />
      </section>
    </div>
  );
}

ScrollingSys.propTypes = propTypes;

export default ScrollingSys;

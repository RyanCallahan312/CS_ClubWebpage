import React from "react";
import { NavSys } from "./exporter";

import "./Home.css";

function Home() {
  return (
    <div className="homeDesign">
      <NavSys />

      <h1>Wellcome to BSU Computer Science's Club Official Page</h1>
      <video src="/img&vid/vidPlay1.mp4" autoPlay loop muted />
    </div>
  );
}

export default Home;

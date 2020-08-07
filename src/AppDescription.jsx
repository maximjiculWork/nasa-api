import React from "react";
import { NavLink } from "react-router-dom";

export default function AppDescription() {
  return (
    <div className="app-descr">
      <h2>This app shows Astronomy Picture of the Day</h2>
      <NavLink className="btn" to="nasa-pod">
        Get started
      </NavLink>
    </div>
  );
}

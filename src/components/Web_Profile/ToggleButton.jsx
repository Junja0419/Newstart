/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import Toggle from "./Toggle";
import "./style.css";

export const ToggleButton = ({ stateProp, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "off",
  });

  return (
    <div
      className={`state-off-wrapper ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <Toggle
        className={`${state.state === "on" ? "class" : "class-2"}`}
        knobClassName={`${state.state === "on" && "class-3"}`}
        state={state.state === "on" ? "on" : "off"}
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "off") {
    switch (action) {
      case "click":
        return {
          state: "on",
        };
    }
  }

  if (state.state === "on") {
    switch (action) {
      case "click":
        return {
          state: "off",
        };
    }
  }

  return state;
}

ToggleButton.propTypes = {
  stateProp: PropTypes.oneOf(["off", "on"]),
};

export default ToggleButton;
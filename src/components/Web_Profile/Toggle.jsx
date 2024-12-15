/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Toggle = ({ state, className, knobClassName }) => {
  return (
    <div className={`toggle ${state} ${className}`}>
      <div className={`knob ${knobClassName}`} />
    </div>
  );
};

Toggle.propTypes = {
  state: PropTypes.oneOf(["off", "on"]),
};

export default Toggle;
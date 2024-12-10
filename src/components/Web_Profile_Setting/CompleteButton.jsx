/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CompleteButton = ({
  disabled = false,
  className,
  text,
  divClassName,
}) => {
  return (
    <div className={`wps-state-disabled-wrapper disabled-${disabled} ${className}`}>
      <div className={`div ${divClassName}`}>{text}</div>
    </div>
  );
};

CompleteButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default CompleteButton;
/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LoginButton = ({
  disabled = false,
  className,
  text = "다음",
  divClassName,
}) => {
  return (
    <div className={`login-state-disabled-wrapper disabled-${disabled} ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{text}</div>
    </div>
  );
};

LoginButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

export default LoginButton;
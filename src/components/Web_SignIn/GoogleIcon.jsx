/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const GoogleIcon = ({
  size,
  className,
  sizeX = "https://c.animaapp.com/IP5lyiL7/img/size-32x32@2x.png",
}) => {
  return (
    <img
      className={`web-signin-google-icon ${size} ${className}`}
      alt="Size"
      src={
        size === "forty-x-40"
          ? "https://c.animaapp.com/IP5lyiL7/img/size-40x40@2x.png"
          : size === "forty-eight-x-48"
            ? "https://c.animaapp.com/IP5lyiL7/img/size-48x48@2x.png"
            : sizeX
      }
    />
  );
};

GoogleIcon.propTypes = {
  size: PropTypes.oneOf(["forty-eight-x-48", "forty-x-40", "thirty-two-x-32"]),
  sizeX: PropTypes.string,
};

export default GoogleIcon;

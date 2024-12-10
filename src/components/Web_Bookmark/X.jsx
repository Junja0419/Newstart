/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const X = ({
  size,
  className,
  img = "https://c.animaapp.com/WStZlVhZ/img/size-24@2x.png",
}) => {
  return (
    <img
      className={`x ${size} ${className}`}
      alt="Size"
      src={
        size === "sixteen"
          ? "https://c.animaapp.com/WStZlVhZ/img/size-16@2x.png"
          : size === "twenty"
            ? "https://c.animaapp.com/WStZlVhZ/img/size-20@2x.png"
            : size === "twenty-four"
              ? img
              : size === "thirty-two"
                ? "https://c.animaapp.com/WStZlVhZ/img/size-32@2x.png"
                : size === "forty"
                  ? "https://c.animaapp.com/WStZlVhZ/img/size-40@2x.png"
                  : "https://c.animaapp.com/WStZlVhZ/img/size-48@2x.png"
      }
    />
  );
};

X.propTypes = {
  size: PropTypes.oneOf([
    "sixteen",
    "twenty-four",
    "forty-eight",
    "twenty",
    "thirty-two",
    "forty",
  ]),
  img: PropTypes.string,
};

export default X;
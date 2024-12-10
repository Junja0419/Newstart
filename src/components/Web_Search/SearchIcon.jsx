/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SearchIcon = ({
  size,
  className,
  img = "https://c.animaapp.com/nzh65NNa/img/size-20@2x.png",
  size1 = "https://c.animaapp.com/nzh65NNa/img/size-24@2x.png",
}) => {
  return (
    <img
      className={`search ${size} ${className}`}
      alt="Size"
      src={
        size === "sixteen"
          ? "https://c.animaapp.com/nzh65NNa/img/size-16@2x.png"
          : size === "twenty"
            ? img
            : size === "twenty-four"
              ? size1
              : size === "thirty-two"
                ? "https://c.animaapp.com/nzh65NNa/img/size-32@2x.png"
                : size === "forty"
                  ? "https://c.animaapp.com/nzh65NNa/img/size-40@2x.png"
                  : "https://c.animaapp.com/nzh65NNa/img/size-48@2x.png"
      }
    />
  );
};

SearchIcon.propTypes = {
  size: PropTypes.oneOf([
    "sixteen",
    "twenty-four",
    "forty-eight",
    "twenty",
    "thirty-two",
    "forty",
  ]),
  img: PropTypes.string,
  size1: PropTypes.string,
};

export default SearchIcon;
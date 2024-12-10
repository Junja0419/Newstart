/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BookmarkIconForMobileTab = ({
  className,
  bookmark = "https://c.animaapp.com/JmVmo2aX/img/bookmark@2x.png",
}) => {
  return (
    <img
      className={`web-headline-bookmark-wrapper ${className}`}
      alt="Bookmark"
      src={bookmark}
    />
  );
};

BookmarkIconForMobileTab.propTypes = {
  bookmark: PropTypes.string,
};

export default BookmarkIconForMobileTab;
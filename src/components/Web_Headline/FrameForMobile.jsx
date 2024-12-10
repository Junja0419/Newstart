/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import PropTypes from "prop-types";
import BookmarkHover from "./BookmarkHover";
import "./style.css";

export const Frame = ({ 
    newspaper, 
    title,
    date,
    text
}) => {
  return (
    <div className="mobile-headline-frame">
              <div className="mobile-headline-title-wrapper">
                <p className="mobile-headline-title">
                    {title}
                </p>
                <div className="mobile-headline-date">{date}</div>
                <div className="mobile-headline-newspaper">{newspaper}</div>
                <BookmarkHover
                  stateDefaultClassName="mobile-headline-bookmark-button"
                  stateProp="default"
                />
              </div>
              <img
                    className="mobile-headline-line-image"
                    alt="Line"
                    src="https://c.animaapp.com/JmVmo2aX/img/line-7.png"
                  />
                <p className="mobile-headline-article-text">
                  {text}
                </p>
    </div>
  );
};

Frame.propTypes = {
    newspaper: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  };

export default Frame;
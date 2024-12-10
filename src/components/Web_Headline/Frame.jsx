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
    <div className="web-headline-frame">
              <div className="web-headline-title">
                <div className="web-headline-newspaper">
                  <div className="web-headline-newspaper-text">{newspaper}</div>

                  <p className="web-headline-newspaper-title">
                    {title}
                  </p>

                  <div className="web-headline-newspaper-title-date">{date}</div>

                  <BookmarkHover
                    stateDefaultClassName="web-headline-bookmark-button"
                    stateProp="default"
                  />
                </div>

                <div className="web-headline-line-wrapper">
                  <img
                    className="web-headline-line-image"
                    alt="Line"
                    src="https://c.animaapp.com/JmVmo2aX/img/line-7.png"
                  />
                </div>
              </div>

              <div className="web-headline-article">
                <p className="web-headline-article-text">
                  {text}
                </p>
              </div>
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
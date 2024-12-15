/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React , { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";
import BookmarkHover from "./BookmarkHover";
import "./style.css";

export const Frame = ({ 
    press, 
    title,
    date,
    content,
    isBookmarked, 
    onBookmarkChange, 
    category,
    link
}) => {
  return (
    <div className="web-headline-frame">
              <div className="web-headline-title">
                <div className="web-headline-newspaper">
                  <div className="web-headline-newspaper-text">{press}</div>

                  <p className="web-headline-newspaper-title">
                    {title}
                  </p>
                <div className="time-bookmark-wrapper-for-headline-frame">
                  <div className="web-headline-newspaper-title-date">{date}</div>

                  <BookmarkHover
                    classNameForBookmarkImg="web-headline-bookmark-button-img"
                    stateProp={isBookmarked ? "bookmark-filled" : "default"}
                    onBookmarkChange={onBookmarkChange}
                    className="bookmark-button-for-web-headline"
                  />
                </div>
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
                  {content}
                </p>
              </div>
          <div className="web-headline-link">
            {link}
          </div>
    </div>
  );
};

Frame.propTypes = {
    press: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    content: PropTypes.string,
    link: PropTypes.string,
  };

export default Frame;
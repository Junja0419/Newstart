/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import BookmarkTab from "./Tab/BookmarkTab";
import HomeTab from "./Tab/HomeTab";
import ProfileTab from "./Tab/ProfileTab";
import SearchTab from "./Tab/SearchTab";
import "./style.css";

export const Menu = ({
  className,
  homeTabDivClassName,
  homeTabIcon = "https://c.animaapp.com/WStZlVhZ/img/icon-8@2x.png",
  bookmarkTabDivClassName,
  bookmarkTabBookmarkBookmark = "https://c.animaapp.com/WStZlVhZ/img/bookmark-1@2x.png",
}) => {
  return (
    <div className={`web-bookmark-menu ${className}`}>
      <div className="overlap-group">
        <div className="div-2">
          <HomeTab
            className="home-tab-instance"
            divClassName={homeTabDivClassName}
            icon={homeTabIcon}
            stateProp="default"
          />
          <BookmarkTab
            bookmarkBookmark={bookmarkTabBookmarkBookmark}
            divClassName={bookmarkTabDivClassName}
            stateProp="default"
          />
          <SearchTab stateProp="default" />
          <ProfileTab stateProp="default" />
        </div>

        <div className="title">NEWSTART</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  homeTabIcon: PropTypes.string,
  bookmarkTabBookmarkBookmark: PropTypes.string,
};

export default Menu;
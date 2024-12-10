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
  homeTabIcon = "https://c.animaapp.com/KaiTeIt5/img/icon-8@2x.png",
  homeTabDivClassName,
  profileTabIcon = "https://c.animaapp.com/KaiTeIt5/img/icon-3@2x.png",
  profileTabDivClassName,
}) => {
  return (
    <div className={`web-profile-menu ${className}`}>
      <div className="overlap-group">
        <div className="div-2">
          <HomeTab
            className="home-tab-instance"
            divClassName={homeTabDivClassName}
            icon={homeTabIcon}
            stateProp="default"
          />
          <BookmarkTab stateProp="default" />
          <SearchTab stateProp="default" />
          <ProfileTab
            divClassName={profileTabDivClassName}
            icon={profileTabIcon}
            stateProp="default"
          />
        </div>

        <div className="title">NEWSTART</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  homeTabIcon: PropTypes.string,
  profileTabIcon: PropTypes.string,
};

export default Menu;
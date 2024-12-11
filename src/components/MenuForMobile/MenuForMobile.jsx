/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React from "react";
import "./style.css";

export const MenuForMobile = ({
    srcformainicon = "https://c.animaapp.com/nzh65NNa/img/icon-13@2x.png",
    srcforbookmarkicon ="https://c.animaapp.com/nzh65NNa/img/bookmark-3@2x.png",
    srcforsearchicon="https://c.animaapp.com/WStZlVhZ/img/icon-13@2x.png",
    srcforprofileicon="https://c.animaapp.com/nzh65NNa/img/icon-18@2x.png",
    activeTab = "main",
}) => {
  return (
    <div className="wsmfm-navigation-bottom">
            <div className="tab-bar-buttons">
              <Link className="tab" to="/main">
                <img
                  className="mobile-navigator-icon"
                  alt="Icon"
                  src={srcformainicon}
                />

                <div className=
                {`navigator-label ${activeTab === "main" ? "clicked" : ""
                }`}>Home</div>
              </Link>

              <Link className="tab" to="/bookmark">
                <img
                  className="mobile-navigator-icon"
                  alt="Icon"
                  src={srcforbookmarkicon}
                />
                <div className=
                {`navigator-label ${activeTab === "bookmark" ? "clicked" : ""
                }`}>Bookmark</div>
              </Link>

              <Link className="tab" to="/search">
                <img
                  className="mobile-navigator-icon"
                  alt="Icon"
                  src={srcforsearchicon}
                />

                <div className=
                {`navigator-label ${activeTab === "search" ? "clicked" : ""
                }`}>Search</div>
              </Link>

              <Link className="tab" to="/profile">
                <img
                  className="mobile-navigator-icon"
                  alt="Icon"
                  src={srcforprofileicon}
                />

                <div className=
                {`navigator-label ${activeTab === "profile" ? "clicked" : ""
                }`}>Profile</div>
              </Link>
            </div>
          </div>
  );
};

MenuForMobile.propTypes = {
    srcformainicon: PropTypes.string,
    srcforbookmarkicon: PropTypes.string,
    srcforsearchicon: PropTypes.string,
    srcforprofileicon: PropTypes.string,
  };

export default MenuForMobile;
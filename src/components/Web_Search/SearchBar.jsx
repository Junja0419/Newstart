/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import SearchIcon from "./SearchIcon";
import "./style.css";

export const SearchBar = ({
  property1,
  className,
  frameClassName,
  frameClassNameOverride,
  searchSize = "https://c.animaapp.com/nzh65NNa/img/search-4@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`search-bar property-1-0-${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="overlap-group-3">
        {["default", "hover"].includes(state.property1) && (
          <>
            <div className={`frame-wrapper ${frameClassName}`}>
              <div className="frame-4">
                <div className="rectangle-3" />

                <input 
                  className="text-wrapper-2"
                  placeholder="궁금한 아티클을 찾아보세요" />
              </div>
            </div>

            <div
              className={`search-instance-wrapper ${frameClassNameOverride}`}
            >
              <SearchIcon
                className="instance-node"
                size="twenty-four"
                size1={searchSize}
              />
            </div>
          </>
        )}

        {state.property1 === "click" && (
          <>
            <div className="div-wrapper">
              <div className="frame-5">
                <div className="rectangle-4" />
              </div>
            </div>

            <div className="frame-6">
              <SearchIcon
                className="instance-node"
                size="twenty-four"
                size1="https://c.animaapp.com/nzh65NNa/img/search-5@2x.png"
              />
            </div>

            <div className="frame-7">
              <img
                className="img"
                alt="Icon"
                src="https://c.animaapp.com/nzh65NNa/img/icon-12@2x.png"
              />

              <div className="text-wrapper-3">search result</div>
            </div>

            <div className="frame-8">
              <img
                className="img"
                alt="Icon"
                src="https://c.animaapp.com/nzh65NNa/img/icon-12@2x.png"
              />

              <div className="text-wrapper-3">search result</div>
            </div>

            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/nzh65NNa/img/line-11-1@2x.png"
            />
          </>
        )}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "click",
        };
    }
  }

  return state;
}

SearchBar.propTypes = {
  property1: PropTypes.oneOf(["click", "hover", "default"]),
  searchSize: PropTypes.string,
};

export default SearchBar;
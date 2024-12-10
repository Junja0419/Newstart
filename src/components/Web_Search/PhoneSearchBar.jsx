/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import SearchIcon from "./SearchIcon";
import "./style.css";

export const PhoneSearchBar = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`phone-search-bar ${state.property1} ${className}`}
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
      {["default", "hover"].includes(state.property1) && (
        <div className="overlap-group">
          <div className="frame">
            <div className="div">
              <div className="rectangle" />

              <input className="input" />
            </div>
          </div>

          <div className="search-wrapper">
            <SearchIcon
              className="search-instance"
              img="https://c.animaapp.com/nzh65NNa/img/search-6@2x.png"
              size="twenty"
            />
          </div>
        </div>
      )}

      {state.property1 === "click" && (
        <>
          <div className="overlap-group-2">
            <div className="frame">
              <div className="rectangle-wrapper">
                <div className="rectangle-2" />
              </div>

              <input className="input" id="input-1" />
            </div>

            <div className="search-wrapper">
              <SearchIcon
                className="search-instance"
                img="https://c.animaapp.com/nzh65NNa/img/search-6@2x.png"
                size="twenty"
              />
            </div>

            <div className="frame-2">
              <img
                className="icon"
                alt="Icon"
                src="https://c.animaapp.com/nzh65NNa/img/icon-12@2x.png"
              />

              <label className="text-wrapper" htmlFor="input-1">
                search result
              </label>
            </div>

            <img
              className="line"
              alt="Line"
              src="https://c.animaapp.com/nzh65NNa/img/line-11@2x.png"
            />
          </div>

          <div className="frame-3">
            <img
              className="icon"
              alt="Icon"
              src="https://c.animaapp.com/nzh65NNa/img/icon-12@2x.png"
            />

            <div className="text-wrapper">search result</div>
          </div>
        </>
      )}
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

PhoneSearchBar.propTypes = {
  property1: PropTypes.oneOf(["click", "hover", "default"]),
};

export default PhoneSearchBar;
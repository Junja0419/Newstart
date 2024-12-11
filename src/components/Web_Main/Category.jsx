/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./styleforcategory.css";

export const Category = ({
  stateProp,
  className,
  frameClassNameOverride,
  lineClassName,
  line = "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png",
  lineClassNameOverride,
  img = "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png",
  imgClassName,
  line1 = "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png",
  imgClassNameOverride,
  line2 = "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png",
  lineClassName1,
  line3 = "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png",
  lineClassName2,
  line4 = "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "politics",
  });

  return (
    <div className={`web-main-menu-bar ${state.state} ${className}`}>
        <div className={`frame-2 ${frameClassNameOverride}`}>
          <div
            className="menu-tab"
            onClick={() => {
              dispatch("click_173");
            }}
          >
            <div className="text-wrapper-2">정치</div>

            <img
              className={`line ${lineClassName}`}
              alt="Line"
              src={
                state.state === "politics"
                  ? line
                  : "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png"
              }
            />
          </div>

          <div
            className="menu-tab"
            onClick={() => {
              dispatch("click");
            }}
          >
            <div className="text-wrapper-3">경제</div>

            <img
              className={`img ${lineClassNameOverride}`}
              alt="Line"
              src={
                state.state === "economy"
                  ? "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png"
                  : img
              }
            />
          </div>

          <div
            className="menu-tab"
            onClick={() => {
              dispatch("click_158");
            }}
          >
            <div className="text-wrapper-4">사회</div>

            <img
              className={`img ${imgClassName}`}
              alt="Line"
              src={
                state.state === "social"
                  ? "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png"
                  : line1
              }
            />
          </div>

          <div className="menu-tab"
            onClick={() => {
              dispatch("click_555");
            }}>
            <div className="text-wrapper-5">생활/문화</div>

            <img
              className={`img ${imgClassNameOverride}`}
              alt="Line"
              src={
                state.state === "life"
                  ? "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png"
                  : line2
              }
            />
          </div>

          <div
            className="menu-tab"
            onClick={() => {
              dispatch("click_164");
            }}
          >
            <div className="text-wrapper-6">IT/과학</div>

            <img
              className={`img ${lineClassName1}`}
              alt="Line"
              src={
                state.state === "it"
                  ? "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png"
                  : line3
              }
            />
          </div>

          <div
            className="menu-tab"
            onClick={() => {
              dispatch("click_167");
            }}
          >
            <div className="text-wrapper-7">세계</div>

            <img
              className={`img ${lineClassName2}`}
              alt="Line"
              src={
                state.state === "world"
                  ? "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png"
                  : line4
              }
            />
          </div>
        </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        state: "economy",
      };

    case "click_158":
      return {
        ...state,
        state: "social",
      };

    case "click_555":
    return {
      ...state,
      state: "life",
    };

    case "click_164":
      return {
        ...state,
        state: "it",
      };

    case "click_167":
      return {
        ...state,
        state: "world",
      };

    case "click_173":
      return {
        ...state,
        state: "politics",
      };
  }

  return state;
}

Category.propTypes = {
  stateProp: PropTypes.oneOf([
    "social",
    "world",
    "politics",
    "it",
    "life",
    "economy",
  ]),
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  line4: PropTypes.string,
};

export default Category;
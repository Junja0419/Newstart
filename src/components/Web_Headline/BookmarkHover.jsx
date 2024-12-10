/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BookmarkHover = ({ stateProp, stateDefaultClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });

  return (
    <>
      {state.state === "default" && (
        <div
          className={`web-headline-bookmark state-default ${stateDefaultClassName}`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
        />
      )}

      {["bookmark-filled", "hover"].includes(state.state) && (
        <img
          className={`web-headline-bookmark state-bookmark ${state.state} ${stateDefaultClassName}`}
          alt="State bookmark"
          src={
            state.state === "hover"
              ? "https://c.animaapp.com/JmVmo2aX/img/state-hover@2x.png"
              : "https://c.animaapp.com/JmVmo2aX/img/state-bookmark-filled@2x.png"
          }
        />
      )}
    </>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "default",
      };
  }

  return state;
}

BookmarkHover.propTypes = {
  stateProp: PropTypes.oneOf(["bookmark-filled", "hover", "default"]),
};

export default BookmarkHover;

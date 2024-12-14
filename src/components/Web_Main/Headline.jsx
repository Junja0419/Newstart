/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./styleforheadline.css";

export const Headline = ({
  headline_id,
  stateProp,
  className,
  headlinenumber,
  text = "02",
  headlinetextGroup,
  headlineText,
  title = "텍스트텍스트텍스트텍스트텍스트텍스트<br/>가나다라마바사",
  headlineNewspaper,
  press="안준석일보",
  category="경제",
  onClick,
  useridfromeachcomponents,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <div
      className={`web-main-headline state-0-${state.state} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() =>
        navigate(`/headline/${headline_id}`, {
          state: { useridfromeachcomponents }, // userid를 state로 전달
        })
      }
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      
    >
        <div className={`number ${headlinenumber}`}>{text}</div>
        <div className={`text-group ${headlinetextGroup}`}>
          <div className="headlinetextwrapper">
            <div className={`label ${headlineText}`}>{title}</div>
          </div>
          <div className={`label-2 ${headlineNewspaper}`}>{category} | {press}</div>
        </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.state === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          state: "hover",
        };
    }
  }

  if (state.state === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          state: "default",
        };

      case "click":
        return {
          state: "click",
        };
    }
  }

  return state;
}

Headline.propTypes = {
  stateProp: PropTypes.oneOf(["click", "hover", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};

export default Headline;
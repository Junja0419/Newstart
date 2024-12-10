/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./style.css";

export const HomeTab = ({
  stateProp,
  className,
  icon = "https://c.animaapp.com/nzh65NNa/img/icon-10@2x.png",
  divClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });
  const navigate = useNavigate(); // navigate 함수 정의

  return (
    <div
      className={`search-home-tab ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => navigate("/main")} // 클릭시 /main으로 이동
    >
      <img className="icon-2" 
       alt="Icon" 
       src={
        state.state === "hover" ? "https://c.animaapp.com/zuoomGM9/img/icon-9@2x.png" 
        : icon } />

      <div className={`text-wrapper-4 ${divClassName}`}>Home</div>
    </div>
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

HomeTab.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
  icon: PropTypes.string,
};

export default HomeTab;
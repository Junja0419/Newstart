/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import Bookmark from "./Bookmark";
import "./style.css";

export const BookmarkTab = ({ stateProp }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <div
      className={`web-main-bookmark-tab state-4-${state.state}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => navigate("/bookmark")} // 클릭 시 "/bookmark" 경로로 이동
    >
      {state.state === "default" && (
        <Bookmark
          bookmark="https://c.animaapp.com/zuoomGM9/img/bookmark-3@2x.png"
          className="bookmark-instance"
        />
      )}

      {state.state === "hover" && (
        <img
          className="bookmark-filled"
          alt="Bookmark filled"
          src="https://c.animaapp.com/zuoomGM9/img/bookmark-filled@2x.png"
        />
      )}

      <div className="text-wrapper-9">Bookmark</div>
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

BookmarkTab.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
};

export default BookmarkTab;
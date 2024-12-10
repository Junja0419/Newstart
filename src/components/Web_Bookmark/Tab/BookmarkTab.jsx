/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import Bookmark from "./Bookmark";
import BookmarkFilled from "./BookmarkFilled";
import "./style.css";

export const BookmarkTab = ({
  stateProp,
  bookmarkBookmark = "https://c.animaapp.com/WStZlVhZ/img/bookmark-1@2x.png",
  divClassName,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });
  const navigate = useNavigate(); // navigate 함수 정의

  return (
    <div
      className={`web-bookmark-bookmark-tab state-${state.state}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => navigate("/bookmark")} // 클릭 시 "/bookmark" 경로로 이동
    >
      {state.state === "default" && (
        <Bookmark bookmark={bookmarkBookmark} className="instance-node" />
      )}

      {state.state === "hover" && (
        <BookmarkFilled
          bookmarkFilled="https://c.animaapp.com/WStZlVhZ/img/bookmark-filled-1@2x.png"
          className="instance-node"
        />
      )}

      <div className={`div ${divClassName}`}>Bookmark</div>
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
  bookmarkBookmark: PropTypes.string,
};

export default BookmarkTab;
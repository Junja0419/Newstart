/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import "./style.css";


export const ProfileTab = ({ stateProp }) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "default",
  });
  const navigate = useNavigate(); // navigate 함수 정의

  return (
    <div
      className={`search-profile-tab state-1-${state.state}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onClick={() => navigate("/profile")} // 클릭시 /profile로 이동
    >
      <img
        className="icon-4"
        alt="Icon"
        src={
          state.state === "hover"
            ? "https://c.animaapp.com/nzh65NNa/img/icon-6@2x.png"
            : "https://c.animaapp.com/nzh65NNa/img/icon-18@2x.png"
        }
      />

      <div className="text-wrapper-7">Profile</div>
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

ProfileTab.propTypes = {
  stateProp: PropTypes.oneOf(["hover", "default"]),
};

export default ProfileTab;
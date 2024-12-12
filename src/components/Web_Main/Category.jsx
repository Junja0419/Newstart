/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useReducer, useRef, useState } from "react";
import "./styleforcategory.css";

export const Category = ({
  stateProp,
  lineActivate = "https://c.animaapp.com/zuoomGM9/img/line-13-35@2x.png",
  line = "https://c.animaapp.com/zuoomGM9/img/line-13-34@2x.png",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    state: stateProp || "politics",
  });

  // 드래그 스크롤 관련 상태
  const categoryRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  // 마우스 이벤트 핸들러
  const onMouseDown = (e) => {
    if (!categoryRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - categoryRef.current.offsetLeft);
    setScrollLeft(categoryRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging || startX === null || !categoryRef.current) return;
    e.preventDefault();
    const x = e.pageX - categoryRef.current.offsetLeft;
    const walk = x - startX;
    categoryRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  // 터치 이벤트 핸들러
  const onTouchStart = (e) => {
    if (!categoryRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - categoryRef.current.offsetLeft);
    setScrollLeft(categoryRef.current.scrollLeft);
  };

  const onTouchMove = (e) => {
    if (!isDragging || startX === null || !categoryRef.current) return;
    const x = e.touches[0].pageX - categoryRef.current.offsetLeft;
    const walk = x - startX;
    categoryRef.current.scrollLeft = scrollLeft - walk;
  };

  const onTouchEnd = () => setIsDragging(false);

  return (
    <div className={`web-main-menu-bar ${state.state}`}>
      <div
        className="frame-2"
        ref={categoryRef}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="menu-tab"
          onClick={() => {
            dispatch("click_173");
          }}
        >
          <div className="text-wrapper-2">정치</div>
          <img
            className="img"
            alt="Line"
            src={state.state === "politics" ? lineActivate : line}
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
            className="img"
            alt="Line"
            src={state.state === "economy" ? lineActivate : line}
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
            className="img"
            alt="Line"
            src={state.state === "social" ? lineActivate : line}
          />
        </div>

        <div
          className="menu-tab"
          onClick={() => {
            dispatch("click_555");
          }}
        >
          <div className="text-wrapper-5">생활/문화</div>
          <img
            className="img"
            alt="Line"
            src={state.state === "life" ? lineActivate : line}
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
            className="img"
            alt="Line"
            src={state.state === "it" ? lineActivate : line}
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
            className="img"
            alt="Line"
            src={state.state === "world" ? lineActivate : line}
          />
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return { ...state, state: "economy" };
    case "click_158":
      return { ...state, state: "social" };
    case "click_555":
      return { ...state, state: "life" };
    case "click_164":
      return { ...state, state: "it" };
    case "click_167":
      return { ...state, state: "world" };
    case "click_173":
      return { ...state, state: "politics" };
  }
  return state;
}

Category.propTypes = {
  stateProp: PropTypes.oneOf(["social", "world", "politics", "it", "life", "economy"]),
  line: PropTypes.string,
};

export default Category;

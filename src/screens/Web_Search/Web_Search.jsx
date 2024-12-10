import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import Bookmark from "../../components/Web_Search/Tab/Bookmark";
import Menu from "../../components/Web_Search/Menu";
import PhoneSearchBar from "../../components/Web_Search/PhoneSearchBar";
import SearchBar from "../../components/Web_Search/SearchBar";
import "./style.css";

export const Web_Search = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="search-screen">
      <div                          // 반응형 웹 기준 설정
        className="search-2"
        style={{
          height:
            screenWidth < 1512
              ? "844px"
              : screenWidth >= 1512
                ? "982px"
                : undefined,
          overflow: screenWidth >= 1512 ? "hidden" : undefined,
          width:
            screenWidth < 1512
              ? "390px"
              : screenWidth >= 1512
                ? "1512px"
                : undefined,
        }}
      >
        { screenWidth >= 1512 && (       // PC용 화면 
          <>
            <div className="for-pc-title-2" >
              <div className="title-frame">
                <div className="text-wrapper-8">검색</div>
              </div>

            </div>
          </>
        )}

        {screenWidth >= 1512 && (
          <>
            <SearchBar
              className="search-bar"
              frameClassName="search-bar-instance"
              frameClassNameOverride="search-bar-2"
              property1="default"
              searchSize="https://c.animaapp.com/nzh65NNa/img/search-7@2x.png"
            />
            <Menu
              className="menu-instance"
              homeTabDivClassName="menu-2"
              homeTabIcon="https://c.animaapp.com/nzh65NNa/img/icon-16@2x.png"
              searchTabDivClassName="menu-3"
              searchTabIcon="https://c.animaapp.com/nzh65NNa/img/icon-17@2x.png"
            />
          </>
        )}

        {screenWidth < 1512 && (
          <>
            <div className="for-mobile-title-2" >
              <div className="title-wrapper">
                <div className="title-3">검색</div>
              </div>

              <PhoneSearchBar
                className="phone-search-bar-instance"
                property1="default"
              />

            </div>
          </>
        )}

        {screenWidth < 1512 && (
          <div className="navigation-bottom">
            <div className="tab-bar-buttons">
              <Link className="tab" to="/main">
                <img
                  className="icon-5"
                  alt="Icon"
                  src="https://c.animaapp.com/nzh65NNa/img/icon-13@2x.png"
                />

                <div className="label">Home</div>
              </Link>

              <Link className="tab" to="/bookmark">
                <Bookmark
                  bookmark="https://c.animaapp.com/nzh65NNa/img/bookmark-3@2x.png"
                  className="bookmark-2"
                />
                <div className="label-2">Bookmark</div>
              </Link>

              <Link className="tab" to="/search">
                <img
                  className="icon-6"
                  alt="Icon"
                  src="https://c.animaapp.com/nzh65NNa/img/icon-17@2x.png"
                />

                <div className="label-3">Search</div>
              </Link>

              <Link className="tab" to="/profile">
                <img
                  className="icon-6"
                  alt="Icon"
                  src="https://c.animaapp.com/nzh65NNa/img/icon-18@2x.png"
                />

                <div className="label-4">Profile</div>
              </Link>
            </div>
          </div>
        )}

        {/* <div
          className="title-2"
          style={{
            gap:
              screenWidth >= 1512
                ? "45px"
                : screenWidth < 1512
                  ? "10px"
                  : undefined,
            left:
              screenWidth >= 1512
                ? "655px"
                : screenWidth < 1512
                  ? "0"
                  : undefined,
            top:
              screenWidth >= 1512
                ? "53px"
                : screenWidth < 1512
                  ? "26px"
                  : undefined,
            width:
              screenWidth >= 1512
                ? "537px"
                : screenWidth < 1512
                  ? "390px"
                  : undefined,
          }}
        >
          {screenWidth >= 1512 && (
            <div className="title-frame">
              <div className="text-wrapper-8">검색</div>
            </div>
          )}

          {screenWidth < 1512 && (
            <>
              <div className="title-wrapper">
                <div className="title-3">검색</div>
              </div>

              <PhoneSearchBar
                className="phone-search-bar-instance"
                property1="default"
              />
            </>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Web_Search;
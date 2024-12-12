import React from "react";
import { useWindowWidth } from "../../breakpoints";
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import PhoneSearchBar from "../../components/Web_Search/PhoneSearchBar";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import SearchBar from "../../components/Web_Search/SearchBar";
import "./style.css";

export const Web_Search = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="search-screen">
      <div className="search-2">
        { screenWidth >= 1512 && (       // PC용 화면 
          <>
            <div className="for-pc-screen" >
              <div className="title-frame">
                <div className="text-wrapper-8">검색</div>
              </div>

              <SearchBar
                className="search-bar"
                frameClassName="search-bar-instance"
                frameClassNameOverride="search-bar-2"
                property1="default"
                searchSize="https://c.animaapp.com/nzh65NNa/img/search-7@2x.png"
              />
              <MenuForPC 
                className="menu-instance"
                IsActivated="yessearchis"
                SearchTabActivated="https://c.animaapp.com/zuoomGM9/img/icon-6@2x.png" />
            </div>
          </>
        )}

        {screenWidth < 1512 && (  // 모바일용 화면
          <>
          <div className="for-mobile-screen">
            <div className="for-mobile-title-2" >
              <div className="title-wrapper">
                <div className="title-3">검색</div>
              </div>

              <PhoneSearchBar
                className="phone-search-bar-instance"
                property1="default"
              />

            </div>
              <MenuForMobile 
              srcforsearchicon = "https://c.animaapp.com/nzh65NNa/img/icon-17@2x.png"
              activeTab="search"
          />
          </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Search;
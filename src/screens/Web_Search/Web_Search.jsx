import React from "react";
import { useWindowWidth } from "../../breakpoints";
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import SearchBar from "../../components/Web_Search/SearchBar";
import FrameForSearchBar from "../../components/Web_Search/FrameForSearchBar";
import FrameForMobileSearchBar from "../../components/Web_Search/FrameForMobileSearchBar";
import "./style.css";

export const Web_Search = ({
  searchCount = 5,
}) => {
  const screenWidth = useWindowWidth();
  // searchCount에 따른 동적 검색 결과 div 생성
  const dynamicDivs2 = Array.from({ length: searchCount }).map((_, index) => (
    <div key={index} className="dynamic-div-creator-for-searchbar">
        <FrameForSearchBar 
          text = {'세줄텍스트입니다\n세줄\n텍스트입니다'}
          category = "경제"
          newspaper = "한국일보" />
    </div>
    ));

  const dynamicDivs3 = Array.from({ length: searchCount }).map((_, index) => (
    <div key={index} className="dynamic-div-creator-for-searchbar">
        <FrameForMobileSearchBar 
          text = {'세줄텍스트입니다\n세줄\n텍스트입니다'}
          category = "경제"
          newspaper = "한국일보" />
    </div>
    ));

  const handleSearch = (query) => {
    console.log("검색어:", query); // 여기서 검색어를 처리하거나 상태를 업데이트
  };


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
                property1="default"
                onSearch={handleSearch}
              />
              <div className="search-result-frame-web-search">
              <div className="text-wrapper-for-web-search">
                <div className="text-wrapper-2-for-web-search">
                  <div className="text-wrapper-6-for-bookmark">아티클</div>
                  <div className="div-3" />
                </div>
                </div>
                {dynamicDivs2}
              </div>
            </div>
              <MenuForPC 
                className="menu-instance"
                IsActivated="yessearchis"
                SearchTabActivated="https://c.animaapp.com/zuoomGM9/img/icon-6@2x.png" />
          </>
        )}

        {screenWidth < 1512 && (  // 모바일용 화면
          <>
          <div className="for-mobile-screen">
            <div className="for-mobile-title-2" >
              <div className="title-wrapper">
                <div className="title-3">검색</div>
              </div>

              <SearchBar
                property1="default"
                className="search-bar-for-mobile"
                onSearch={handleSearch}
              />
              <div className="search-result-frame-web-search-for-mobile">
              <div className="text-wrapper-for-web-search">
                <div className="text-wrapper-2-for-web-search-for-mobile">
                  <div className="text-wrapper-6-for-bookmark-for-mobile">아티클</div>
                  <div className="div-3" />
                </div>
                </div>
              {dynamicDivs3}
             </div> 
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
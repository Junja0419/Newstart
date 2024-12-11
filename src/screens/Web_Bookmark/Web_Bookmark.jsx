import React from "react";
import { useWindowWidth } from "../../breakpoints";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import Menu from "../../components/Web_Bookmark/Menu";
import FrameForMobile from "../../components/Web_Bookmark/FrameForMobile";
import Frame from "../../components/Web_Bookmark/Frame"
import "./style.css";

export const Web_Bookmark = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="bookmark-screen">
      <div
        className="bookmark-2"
        style={{ // 반응형 웹 기준 설정
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
        {screenWidth < 1512 && ( // 모바일용 화면
          <>
          <div className="formobilescreen">
            <div className="bookmark-tab-2">
              <div className="frame">
                <div className="text-wrapper-4">아티클</div>
              </div>

              <div className="div-3" />
            </div>

            <div className="title-wrapper">
              <div className="title-2">북마크</div>
            </div>

            <FrameForMobile 
                text = {`세줄텍스트입니다\n세줄\n텍스트입니다`}
                category = "경제"
                newspaper = "한국일보" />
              
            <FrameForMobile 
              text = {`세줄텍스트입니다\n세줄\n텍스트입니다`}
              category = "경제"
              newspaper = "한국일보" />     
          </div>

            {/* 모바일용 탭 메뉴, 임시 구현 상태.. */}
            <MenuForMobile 
              srcforbookmarkicon = "https://c.animaapp.com/WStZlVhZ/img/bookmark-filled-2@2x.png"
              activeTab="bookmark"
            />
            {/* <div className="navigation-bottom">
              <div className="tab-bar-buttons">
                <div className="tab">
                  <img
                    className="icon-3"
                    alt="Icon"
                    src="https://c.animaapp.com/WStZlVhZ/img/icon-9@2x.png"
                  />

                  <div className="label-3">Home</div> 
                </div>

                <Link className="tab" to="/bookmark">
                  <BookmarkFilled
                    bookmarkFilled="https://c.animaapp.com/WStZlVhZ/img/bookmark-filled-2@2x.png"
                    className="bookmark-filled-instance"
                  />
                  <div className="label-4">Bookmark</div>
                </Link>

                <div className="tab">
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://c.animaapp.com/WStZlVhZ/img/icon-13@2x.png"
                  />

                  <div className="label-5">Search</div>
                </div>

                <div className="tab">
                  <img
                    className="icon-4"
                    alt="Icon"
                    src="https://c.animaapp.com/WStZlVhZ/img/icon-14@2x.png"
                  />

                  <div className="label-6">Profile</div>
                </div>
              </div>
            </div> */}
          </>
        )}

        {screenWidth >= 1512 && ( // PC용 화면
          <>
            <div className="frame-2">
              <div className="title-frame-wrapper">
                <div className="title-frame">
                  <div className="text-wrapper-5">북마크</div>
                </div>
              </div>

              <div className="article">
                <div className="article-frame">
                  <div className="bookmark-tab-3">
                    <div className="text-frame">
                      <div className="text-wrapper-6">아티클</div>
                    </div>

                    <div className="div-3" />
                  </div>
                </div>
              </div>

              <Frame 
                text = {'세줄텍스트입니다\n세줄\n텍스트입니다'}
                category = "경제"
                newspaper = "한국일보" />
              
              <Frame 
                text = {'세줄텍스트입니다\n세줄\n텍스트입니다'}
                category = "경제"
                newspaper = "한국일보" />     
              
            </div>

            <Menu
              bookmarkTabBookmarkBookmark="https://c.animaapp.com/WStZlVhZ/img/bookmark-3@2x.png"
              bookmarkTabDivClassName="menu-3"
              className="menu-instance"
              homeTabDivClassName="menu-2"
              homeTabIcon="https://c.animaapp.com/WStZlVhZ/img/icon-12@2x.png"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Bookmark;
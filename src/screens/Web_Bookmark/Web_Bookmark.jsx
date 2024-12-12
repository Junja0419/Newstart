import React from "react";
import { useWindowWidth } from "../../breakpoints";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import FrameForMobile from "../../components/Web_Bookmark/FrameForMobile";
import Frame from "../../components/Web_Bookmark/Frame"
import "./style.css";

export const Web_Bookmark = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="bookmark-screen">
      <div className="bookmark-2">
        {screenWidth < 1512 && ( // 모바일용 화면
          <>
        <div className="formobilescreen">
              <div className="title-wrapper">
                <div className="title-2">북마크</div>
              </div>
              <div className="frame">
                <div className="text-wrapper-4">아티클</div>
              </div>

              <div className="div-3" />


            <FrameForMobile 
                text = {`세줄텍스트입니다\n세줄\n텍스트입니다`}
                category = "경제"
                newspaper = "한국일보" />
              
            <FrameForMobile 
              text = {`세줄텍스트입니다\n세줄\n텍스트입니다`}
              category = "경제"
              newspaper = "한국일보" />    
              {/* 모바일용 탭 메뉴 */}
            <MenuForMobile 
              srcforbookmarkicon = "https://c.animaapp.com/WStZlVhZ/img/bookmark-filled-2@2x.png"
              activeTab="bookmark"
            /> 
        </div>

            
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

            <MenuForPC 
              className="menu-instance"
              IsActivated="yesbookmarkis"
              BookmarkTabActivated="https://c.animaapp.com/WStZlVhZ/img/bookmark-3@2x.png" />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Bookmark;
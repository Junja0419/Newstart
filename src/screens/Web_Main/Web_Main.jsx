import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import Headline from "../../components/Web_Main/Headline";
import Category from "../../components/Web_Main/Category";
import ToSummaryButton from "../../components/Web_Main/ToSummaryButton";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import "./style.css";

export const Web_Main = () => {
  const screenWidth = useWindowWidth();
  const navigate = useNavigate(); // navigate 함수 정의
  return (
    <div className="web-main">
      <div className="div-3">

{screenWidth < 1512 && ( //모바일용 화면
          <>
          <div className="mobile-frame-4">
          <div className="main-view-for-mobile">
            <div className="frame-5">
              <div className="title-2">오늘의 1분 요약!</div>

              <ToSummaryButton
                arrowRight="https://c.animaapp.com/zuoomGM9/img/arrow-right-2@2x.png"
                className="component-374"
                stateProp="default"
              />
            </div>

            <div className="main-folder-for-mobile" 
              onClick={() => navigate("/summary")} // 클릭 시 "/summary" 경로로 이동
            />

            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/AoZMr3Yn/img/line-3-1@2x.png"
            />
          </div>
          <div className="main-headline-wrapper-for-mobile">
          <div className="main-headline-for-mobile">
            <div className="title-3">최신 헤드라인</div>

            <div className="text-wrapper-12">08:00</div>
          </div>

          <div className="main-category-wrapper-for-mobile">
            <Category
              stateProp="politics"
            />
          </div>

          <Headline
            stateProp="default"
            text="01"
          />
          <Headline
            stateProp="default"
            text="02"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
          />
          <Headline
            stateProp="default"
            text="03"
            text1="엔비디아 젠슨 황 “삼성 HBM 승인 위해 가능한 빠르게 작업 중”"
          />
          <Headline
            stateProp="default"
            text="04"
            text1={
              <>
                텍스트텍스트텍스트텍스트텍스트텍스트
                <br />
                가나다라마바사
              </>
            }
          />
          <Headline
            stateProp="default"
            text="05"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트"
          />
        </div>
        {/* 모바일용 네비게이터 */}
        <MenuForMobile 
              srcformainicon = "https://c.animaapp.com/zuoomGM9/img/icon-9@2x.png"
            />
        </div>

            
          </>
        )}

        {screenWidth >= 1512 && ( //PC용 화면
          <>
        <div className="frame-4">
          <div className="view">
            <div className="frame-5">
              <div className="title-2">오늘의 1분 요약!</div>

              <ToSummaryButton
                arrowRight="https://c.animaapp.com/zuoomGM9/img/arrow-right-2@2x.png"
                className="component-374"
                stateProp="default"
              />
            </div>

            <div className="folder" 
              onClick={() => navigate("/summary")} // 클릭 시 "/summary" 경로로 이동
            />

            <img
              className="line-2"
              alt="Line"
              src="https://c.animaapp.com/AoZMr3Yn/img/line-3-1@2x.png"
            />
          </div>

         <div className="headlinewrapperforpc">
          <div className="headline-2">
            <div className="title-3">최신 헤드라인</div>

            <div className="text-wrapper-12">08:00</div>
          </div>

          <div className="menu-bar-wrapper">
            <Category
              stateProp="politics"
            />
          </div>

          <Headline
            className="headlineforpc"
            headlinenumber="headlinenumberforpc"
            stateProp="default"
            text="01"
            headlinetextGroup="headlinetextGroupforpc"
            headlineText="headlineTextforpc"
            headlineNewspaper="headlineNewspaperforpc"
          />
          <Headline
            className="headlineforpc"
            headlinenumber="headlinenumberforpc"
            stateProp="default"
            text="02"
            headlinetextGroup="headlinetextGroupforpc"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
            headlineText="headlineTextforpc"
            headlineNewspaper="headlineNewspaperforpc"
          />
          <Headline
            className="headlineforpc"
            headlinenumber="headlinenumberforpc"
            stateProp="default"
            text="03"
            headlinetextGroup="headlinetextGroupforpc"
            text1="엔비디아 젠슨 황 “삼성 HBM 승인 위해 가능한 빠르게 작업 중”"
            headlineText="headlineTextforpc"
            headlineNewspaper="headlineNewspaperforpc"
          />
          <Headline
            className="headlineforpc"
            headlinenumber="headlinenumberforpc"
            stateProp="default"
            text="04"
            headlinetextGroup="headlinetextGroupforpc"
            text1={
              <>
                텍스트텍스트텍스트텍스트텍스트텍스트
                <br />
                가나다라마바사
              </>
            }
            headlineText="headlineTextforpc"
            headlineNewspaper="headlineNewspaperforpc"
          />
          <Headline
            className="headlineforpc"
            headlinenumber="headlinenumberforpc"
            stateProp="default"
            text="05"
            headlinetextGroup="headlinetextGroupforpc"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트"
            headlineText="headlineTextforpc"
            headlineNewspaper="headlineNewspaperforpc"
          />
        </div>
        </div>

        <MenuForPC 
          className="frame-51"
          IsActivated="yeshomeis"
          HomeTabActivated="https://c.animaapp.com/zuoomGM9/img/icon-9@2x.png" />
        </>
        )}
      </div>
    </div>
  );
};

export default Web_Main;
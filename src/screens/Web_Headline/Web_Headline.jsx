import React from "react";
import { useWindowWidth } from "../../breakpoints";
import MenuForPC from "../../components/MenuForPC/MenuForPC"
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import BookmarkIconForMobileTab from "../../components/Web_Headline/BookmarkIconForMobileTab";
import FrameForMobile from "../../components/Web_Headline/FrameForMobile";
import Frame from "../../components/Web_Headline/Frame";
import "./style.css";

export const Web_Headline = () => {
  const screenWidth = useWindowWidth();

  return ( 
    <div className="headline">
      <div className="div-3">
        {screenWidth < 1512 && ( //모바일용 화면
          <>
          <div className="frame-for-all-mobile-headline">
          <FrameForMobile
              newspaper = "MBCNEWS"
              title = "국회 외통위, 한미 방위비분담금협정 비준동의안 통과"
              date = "2024.11.28"
              text = {` 국회 외교통일위원회가 한미 방위비분담 특별협정 비준동의안을 통과시켰습니다.

정부는 미국 정부와의 8차례 협의 끝에 지난달, 2026년부터 2030년까지 5년간 유효한 제12차 한미 방위분감금 특별협정을 타결했고, 이에 따라 2026년 주한미군 방위비분담금은 1조5천192억원으로, 2025년보다 8.3％ 늘게 됐습니다.

외통위는 정부에 방위비분담금 결정 방식을 총액형에서 소요형으로 전환하고, 주한미군 한국인 근로자를 직접고용해 국내 노동법이 적용받을 수 있게 제도개선을 논의해달라고 요구하는 내용을 부대의견으로 적었습니다.

한편, 외통위는 가자지구에 대한 인도적 지원 촉구 결의안, 가자지구에서의 즉각적이고 영구적인 휴전 촉구 결의안도 의결했습니다.`} />

            {/* 모바일용 네비게이터 */}
            <MenuForMobile 
              srcformainicon = "https://c.animaapp.com/zuoomGM9/img/icon-9@2x.png"
            />
            </div>
          </>
        )}

        {screenWidth >= 1512 && ( //PC용 화면
          <>
            <Frame 
              newspaper = "MBCNEWS"
              title = "국회 외통위, 한미 방위비분담금협정 비준동의안 통과"
              date = "2024.11.28"
              text = {` 국회 외교통일위원회가 한미 방위비분담 특별협정 비준동의안을 통과시켰습니다.

정부는 미국 정부와의 8차례 협의 끝에 지난달, 2026년부터 2030년까지 5년간 유효한 제12차 한미 방위분감금 특별협정을 타결했고, 이에 따라 2026년 주한미군 방위비분담금은 1조5천192억원으로, 2025년보다 8.3％ 늘게 됐습니다.

외통위는 정부에 방위비분담금 결정 방식을 총액형에서 소요형으로 전환하고, 주한미군 한국인 근로자를 직접고용해 국내 노동법이 적용받을 수 있게 제도개선을 논의해달라고 요구하는 내용을 부대의견으로 적었습니다.

한편, 외통위는 가자지구에 대한 인도적 지원 촉구 결의안, 가자지구에서의 즉각적이고 영구적인 휴전 촉구 결의안도 의결했습니다.`} />
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

export default Web_Headline;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Headline from "../Headline";
import { axiosHeadlines } from "../axiosHeadlines";

export const WorldM = ({ 
  
}) => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axiosHeadlines(1, 25); // ID 1부터 25까지 데이터 가져오기
        setHeadlines(data);
      } catch (error) {
        console.error("Error fetching headlines:", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }
  // 가져오는 설정은 끝... 가져온 것들 {headline.title}, {headline.press}와 같은 형식으로 아래에서 쓰면 됨...
  return (
    <div>
        <Headline
            stateProp="default"
            text="01"
            textofcategory="세계"
          />
          <Headline
            stateProp="default"
            text="02"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트텍스트"
            textofcategory="세계"
          />
          <Headline
            stateProp="default"
            text="03"
            text1="엔비디아 젠슨 황 “삼성 HBM 승인 위해 가능한 빠르게 작업 중”"
            textofcategory="세계"
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
            textofcategory="세계"
          />
          <Headline
            stateProp="default"
            text="05"
            text1="텍스트텍스트텍스트텍스트텍스트텍스트"
            textofcategory="세계"
          /> 
    </div>
  );
};


export default WorldM;
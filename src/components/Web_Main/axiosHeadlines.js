import axios from "axios";

export const axiosHeadlines = async (startId, endId) => {
  try {
    const promises = [];
    for (let id = startId; id <= endId; id++) {
      promises.push(axios.get(`/headline/${id}`));
    }

    // 모든 요청을 병렬로 실행 후 결과를 한 번에 받음
    const responses = await Promise.all(promises);
    const headlines = responses.map((response) => response.data);
    console.log(headlines);
    return headlines;
  } catch (error) {
    console.error("Error fetching headlines:", error);
    throw error;
  }
};
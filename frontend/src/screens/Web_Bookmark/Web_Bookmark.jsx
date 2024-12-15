import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import MenuForMobile from "../../components/MenuForMobile/MenuForMobile";
import MenuForPC from "../../components/MenuForPC/MenuForPC";
import FrameForMobile from "../../components/Web_Bookmark/FrameForMobile";
import Frame from "../../components/Web_Bookmark/Frame";
import "./style.css";

export const Web_Bookmark = () => {
  const screenWidth = useWindowWidth();
  const { id } = useParams(); // url에서 id를 가져옴
  const [bookmarks, setBookmarks] = useState([]);

  /***** 데이터 로드 *****/
  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const response = await fetch(`${process.env.API__URL}/bookmark/${id}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setBookmarks(data.bookmark);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };

    fetchBookmarks();
  }, [id]);

  /***** 북마크 삭제 *****/
  const handleDeleteBookmark = async (bookmark_id) => {
    try {
      const response = await fetch(
        `${process.env.API__URL}/bookmark/delete/${bookmark_id}`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        // 삭제 성공 시 해당 bookmark_id를 제외한 북마크 목록으로 업데이트
        setBookmarks((prevBookmarks) =>
          prevBookmarks.filter(
            (bookmark) => bookmark.bookmark_id !== bookmark_id
          )
        );
      } else {
        console.error("Failed to delete bookmark");
      }
    } catch (error) {
      console.error("Error deleting bookmark:", error);
    }
  };

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

              {bookmarks.map((bookmark) => (
                <FrameForMobile
                  bookmark_id={bookmark.bookmark_id}
                  title={bookmark.headline.title}
                  category={bookmark.headline.category}
                  press={bookmark.headline.press}
                  onDelete={() => handleDeleteBookmark(bookmark.bookmark_id)}
                />
              ))}

              {/* 모바일용 탭 메뉴 */}
              <MenuForMobile
                srcforbookmarkicon="https://c.animaapp.com/WStZlVhZ/img/bookmark-filled-2@2x.png"
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

              {bookmarks.map((bookmark) => (
                <Frame
                  bookmark_id={bookmark.bookmark_id}
                  title={bookmark.headline.title}
                  category={bookmark.headline.category}
                  press={bookmark.headline.press}
                  onDelete={() => handleDeleteBookmark(bookmark.bookmark_id)}
                />
              ))}
            </div>

            <MenuForPC
              className="menu-instance"
              IsActivated="yesbookmarkis"
              BookmarkTabActivated="https://c.animaapp.com/WStZlVhZ/img/bookmark-3@2x.png"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Web_Bookmark;

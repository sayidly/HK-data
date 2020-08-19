import React from 'react';
import './More.scss';

const More = (props) => {

  const moreArticle = [
    {
      title: "【獨家數據】香港學者追蹤6000示威者：他們信任誰？還參與抗爭嗎？",
      url: "https://theinitium.com/article/20200609-hongkong-interview-samson-yuen-gary-tang-panel-survey/"
    },
    {
      title: "梁一夢：經濟拔高，政治圍堵——香港攬炒或再出發？目的地在何方？",
      url: "https://theinitium.com/article/20200518-opinion-hk-political-economical-situation/"
    },
    {
      title: "香港重傷：誰能接住經歷「戰爭」的人們？",
      url: "https://theinitium.com/article/20200514-hongkong-social-trauma-youth-anti-extradition-one-year/"
    },
    {
      title: "香港的第二次國際關鍵時刻？中美談判桌上的攬炒博弈戰",
      url: "https://theinitium.com/article/20200630-hongkong-us-china-international-lobbying-national-security-law/"
    },
    {
      title: "重磅專題：大檢控，香港人所經歷的拘捕和審判",
      url: "https://theinitium.com/project/20200724-hongkong-anti-elab-movement-prosecutions/"
    }
  ]

  return (
    <div className={`${props.class}`}>
      <div className="container">
        <div className="title">
          <strong>延伸閱讀：</strong>
        </div>
        <ol className="articles">
          {moreArticle.map((contentItem, index) =>
            <li key={index}>
              <a href={contentItem.url}>{contentItem.title}</a>
            </li>
          )}
        </ol>
      </div>
    </div>
  )
}

export default More;

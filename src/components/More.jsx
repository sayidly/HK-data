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
      title: "梁俊彥：香港民主派35+初選結果的三重解讀",
      url: "https://theinitium.com/article/20200715-opinion-hk-primary-turnout/"
    },
    {
      title: "葉健民：未來一年，北京剷除香港異見力量的收成期",
      url: "https://theinitium.com/article/20200807-opinion-hk-situation-bj-and-globe/"
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
          <strong>延伸阅读</strong>
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

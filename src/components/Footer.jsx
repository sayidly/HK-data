import React, { useRef, useEffect } from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__container">
          <div className="Footer__container__creators">
              <p className="Footer__container__creators__text">
                  <span className="Footer__container__creators__text__role">調查研究：</span>
                  <span className="Footer__container__creators__text__name">Francis</span>
              </p>
              <p className="Footer__container__creators__text">
                  <span className="Footer__container__creators__text__role">記者：</span>
                  <span className="Footer__container__creators__text__name">Hans、符雨欣</span>
              </p>
              <p className="Footer__container__creators__text">
                  <span className="Footer__container__creators__text__role">設計：</span>
                  <span className="Footer__container__creators__text__name">郭瑾燁、Tseng Lee</span>
              </p>
              <p className="Footer__container__creators__text">
                  <span className="Footer__container__creators__text__role">工程：</span>
                  <span className="Footer__container__creators__text__name">Sayid、Sabrina</span>
              </p>
              <p className="Footer__container__creators__text">
                  <span className="Footer__container__creators__text__role">監製：</span>
                  <span className="Footer__container__creators__text__name">符雨欣、陳倩兒</span>
              </p>
          </div>
          <div className="Footer__container__creators__text">
                <p>
                    <span className="Footer__container__creators__text__copyright">
                        ©2020 Initium Media. All Rights Reserved.
                    </span>
                </p>
          </div>
      </div>
    </div>
  );
}

export default Footer;

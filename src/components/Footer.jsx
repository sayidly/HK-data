import React from 'react';
import "./Footer.scss";

const Footer = () => {

  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__container__creators">
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">調查研究：</span>
            <span className="footer__container__creators__text__name">李立峯、鄭煒、鄧鍵一；<br/>香港中文大學傳播與民意調查中心</span>
          </p>
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">記者：</span>
            <span className="footer__container__creators__text__name">謝梓楓</span>
          </p>
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">設計：</span>
            <span className="footer__container__creators__text__name">郭瑾燁、Tseng Lee</span>
          </p>
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">工程：</span>
            <span className="footer__container__creators__text__name">Sayid、Sabrina</span>
          </p>
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">監製：</span>
            <span className="footer__container__creators__text__name">符雨欣</span>
          </p>
        </div>
        <div className="footer__container__creators__text">
          <p>
            <span className="footer__container__creators__text__copyright">
              ©2020 Initium Media. All Rights Reserved.
            </span>
          </p>
        </div>
      </div>
      <div className="footer__join">
        <div className="container">
          <div className="join__text">
            <h3>加入端傳媒，支持好新聞</h3>
            <p>用你選擇的媒體，決定你看見的世界</p>
          </div>
          <div className="join__link">
            <a href="https://theinitium.com/subscription/offers/?&amp;utm_source=initium&amp;utm_medium=initium&amp;utm_campaign=initium_project" target="_blank">付費支持</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

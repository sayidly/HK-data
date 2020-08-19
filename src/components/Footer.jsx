import React, { useRef, useEffect } from 'react';
import "./Footer.scss";

const Footer = () => {

  useEffect(() => {
    window.onload=function(){
      var o=document.querySelectorAll(".footer__join");
      //   window.onscroll=function(n){
      //     window.innerHeight+window.scrollY>=document.body.offsetHeight?o[0].classList.add("active"):o[0].classList.remove("active")
      //   }

      var lastScrollTop = 0;
      window.addEventListener("scroll", function(){
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop){
          o[0].classList.remove("active")
        } else {
          o[0].classList.add("active")
        }
        lastScrollTop = st <= 0 ? 0 : st;
      }, false);
    }
  })


  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__container__creators">
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">調查研究：</span>
            <span className="footer__container__creators__text__name">Francis</span>
          </p>
          <p className="footer__container__creators__text">
            <span className="footer__container__creators__text__role">記者：</span>
            <span className="footer__container__creators__text__name">Hans、符雨欣</span>
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
            <span className="footer__container__creators__text__name">符雨欣、陳倩兒</span>
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

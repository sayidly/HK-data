import React, { useEffect } from 'react';
import Popup from 'reactjs-popup';
import './Modal.scss';

const Modal = (props) => {
  return (
    <Popup
      trigger={props.trigger}
      modal
      closeOnDocumentClick
    >
     {close => (
      <div class="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div class="modal__content">
          <h5 class="modal__content__title">調查時間：</h5>
          <p class="modal__content__text">2020年6月</p>
        </div>
        <div class="modal__content">
          <h5 class="modal__content__title">負責學者：</h5>
          <p class="modal__content__text">李立峯、鄧鍵一、鄭煒</p>
        </div>
        <div class="modal__content">
          <h5 class="modal__content__title display_contents">調查機構：</h5>
          <p class="modal__content__text display_contents">香港中文大學傳播與民意調查中心（電話調查受政策創新與統籌辦事處的公共政策研究資助計劃資助）</p>
        </div>
        <div class="modal__content">
          <h5 class="modal__content__title">調查人數：</h5>
          <p class="modal__content__text">1574人</p>
        </div>
        <div class="modal__content group">
          <h5 class="modal__content__title">人口特徵：</h5>
          <div  class="modal__content__sub">
            <h6 class="modal__content__sub__title">性別：</h6>
            <p class="modal__content__sub__text">
              <span>男 47.3%</span>
              <span>女 52.7%</span>
            </p>
          </div>
          <div class="modal__content__sub">
            <h6 class="modal__content__sub__title">教育程度：</h6>
            <p class="modal__content__sub__text">
              <span>沒有大專學歷 65.7%</span>
              <span>有大專學歷 34.3%</span>
            </p>
          </div>
          <div class="modal__content__sub">
            <h6 class="modal__content__sub__title">社會階層：</h6>
            <p class="modal__content__sub__text">
              <span>上層及中上層 4.5%</span>
              <span>中層 29.7%</span>
              <span>中下層及基層 65.7%</span>
            </p>
          </div>
        </div>
        <div class="modal__content modal__desc">
          <span>為方便分析，「無政治取向」將歸類為「中間派」。</span>
          <span>數據經四捨五入，總和未必等於100%。</span>
        </div>
      </div>
    )}
    </Popup>
  )
}

export default Modal;

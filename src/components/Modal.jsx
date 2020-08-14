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
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="modal__content">
          <h5 className="modal__content__title">研究團隊：</h5>
          <p className="modal__content__text">xxxx</p>
        </div>
        <div className="modal__content">
          <h5 className="modal__content__title">調查時間：</h5>
          <p className="modal__content__text">2020 年 x 月 -x 月</p>
        </div>
        <div className="modal__content">
          <h5 className="modal__content__title">調查人數：</h5>
          <p className="modal__content__text">xxxx人</p>
        </div>
        <div className="modal__content">
          <h5 className="modal__content__title">人口特徵：</h5>
          <div  className="modal__content__sub">
            <h6 className="modal__content__sub__title">性別：</h6>
            <p className="modal__content__sub__text">
              <span>男 47.3%</span>
              <span>女 52.7%</span>
            </p>
          </div>
          <div className="modal__content__sub">
            <h6 className="modal__content__sub__title">教育程度：</h6>
            <p className="modal__content__sub__text">
              <span>沒有大專學歷 65.5%</span>
              <span>有大專學歷 34.2%</span>
            </p>
          </div>
          <div className="modal__content__sub">
            <h6 className="modal__content__sub__title">社會階層：</h6>
            <p className="modal__content__sub__text">
              <span>上層及中上層 4.5%</span>
              <span>中層 29.4%</span>
              <span>中下層及基層 65.0%</span>
            </p>
          </div>
        </div>
      </div>
    )}
    </Popup>
  )
}

export default Modal;

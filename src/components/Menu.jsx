import React, { useEffect } from 'react';
import './Menu.scss'

const Menu = () => {

  useEffect(()=>{
    function hideMenu() {
      const menuOpen = document.querySelector('.navigation__checkbox').checked;
      console.log(menuOpen);

      if ( menuOpen == true ) {
        document.querySelector('.navigation__checkbox').checked = false;
        console.log("asdfasd");
      }
    }

    const a = document.querySelectorAll('.navigation__link');
    for (var i = 0 ; i < a.length; i++) {
      a[i].addEventListener('click' , hideMenu , false ) ;
    }
  })


  return (
    <div className="navigation">
      <input type="checkbox" id="navi-toggle" className="navigation__checkbox" />

      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
            <span className="navigation__icon-span">&nbsp;</span>
        </span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#cover" className="navigation__link">群眾輪廓</a>
          </li>
          <li className="navigation__item">
            <a href="#intro1" className="navigation__link">民主是什麼？港獨可行嗎？</a>
          </li>
          <li className="navigation__item">
            <a href="#intro2" className="navigation__link">攬炒越嚴峻，對香港更好？</a>
          </li>
          <li className="navigation__item">
            <a href="#intro3" className="navigation__link">香港對中國有多重要？</a>
          </li>
          <li className="navigation__item">
            <a href="#intro4" className="navigation__link">對經濟未來會否悲觀？想移民嗎？</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;

import {hot} from "react-hot-loader";
import React, { useEffect, useState } from "react";
import { csv } from "d3";
import { gsap, TweenLite } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import './Chart.scss';
// import './Bar.scss';
import Bar from "./charts/Bar";
// import barSample0 from "../libs/barSample0";

const Bar001 = (props) =>{

  const [barData, setBarData] = useState([]);

  function TagButton(props){
      return(
          <button onClick={() => csv(`../libs/barSample${props.order}.csv`).then(setBarData)}>{`Button${props.order}`}</button>
      )
  };

  useEffect(() => {
    csv("../libs/barSample0.csv").then(setBarData);
  }, []);

  const buttonOrder = [
    {order: 0},
    {order: 1},
    {order: 2},
  ];

  const buttonGroup = buttonOrder.map((p, key) =>
    <TagButton className="bar001__header__buttons__button" key={key} order={p.order} />
  )

  return(
    <div className="chart bars bar001">
      <div className="chart__container">
          <div className="chart__header">
            <h2 className="chart__header__text__title">{props.title}</h2>
            <div className="chart__header__buttons">
              {buttonGroup}
            </div>
          </div>
          <Bar data={barData} barIndex={`001`}/>
        </div>
    </div>
  );

}

export default Bar001;

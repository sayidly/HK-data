import React, { useState, useEffect } from 'react';
import './Paragraph.scss';


const Paragraph = (props) => {

  const content = props.introContent.content;
  const introColors=props.introColors;
  const sectionClass = props.class;

  useEffect(() => {
    // const introColors=props.introColors;
    // const intro1 = document.getElementsByClassName('intro1');
    // console.log(intro1);
    // console.log(`${introColors.highlightColor}`);
    // intro1[0].style.backgroundImage = `linear-gradient(120deg, ${introColors.highlightColor} 0%, ${introColors.highlightColor} 100%)`;
  });

  return (
    <div className={`intro ${sectionClass}` }>
      <div className="intro__content">
        {content.map((contentItem, index) =>
          <p key={index}>{content[index]}</p>
        )}
      </div>
    </div>
  )
}

export default Paragraph;

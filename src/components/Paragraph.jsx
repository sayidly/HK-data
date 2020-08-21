import React from 'react';
import './Paragraph.scss';


const Paragraph = (props) => {

  const content = props.introContent.content;
  const introColors=props.introColors;
  const sectionClass = props.class;

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

import React from 'react';

const Button = ({
  type,
  name,
  link

}) => {

  let styleClass = `standardStyleBTN `;

  function isEmpty(str) {
    return (!str || str.length === 0);
  }

  switch (type) {

    case 'darkPurpure':
      styleClass += "darkPurpure--BTN";
      break;

    case 'primaryOrange':
      styleClass += "primaryOrange--BTN";
      break;

    case 'secondaryEmpty':
      styleClass += "secondaryEmpty--BTN";
      break;

    case 'primaryWhite':
      styleClass += "primaryWhite--BTN";
      break;

    case 'secondaryTransparent':
      styleClass += "secondaryTransparent--BTN";
      break;

    default:

      break;
  }

  return (
    isEmpty(link) ? <button className={styleClass}> {name} </button>
                  : <a href={link} className={styleClass}>{name}</a>
  )
}


export default Button
import React from 'react';

const Button = ({
  type,
  name

}) => {

  let styleClass = `standarStyleBTN `;

  switch (type) {

    case 'DarckPurpure':
      styleClass += "darckPurpure--BTN";
      break;

    case 'primaryOrange':
      styleClass += "primaryOrange--BTN";
      break;

    case 'secundaryEmty':
      styleClass += "secundaryEmty--BTN";
      break;
    
    case 'primaryWhite':
      styleClass += "primaryWhite--BTN";
      break;
    
    case 'secundaryTransparent':
      styleClass += "secundaryTransparent--BTN";
      break;
        
    default:

      break;
  }




  const commonStyles = {

  };

  return (
    <button
      className={styleClass}
      style={{ ...commonStyles }}

    > {name} </button>


  )
}

export default Button
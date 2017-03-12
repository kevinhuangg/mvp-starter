import React from 'react';

var Nyancat = (props) => {
  console.log(props.clickHandler)
  return (
    <div onClick={props.clickHandler}>
      <div id="wave-a" className="hot rainbow"></div>
      <div id="wave-a" className="cold rainbow"></div>
      <div id="wave-b" className="hot rainbow"></div>
      <div id="wave-b" className="cold rainbow"></div>
      <div id="nyan-cat" className="frame1">
        <div id="tail"></div>
        <div id="paws"></div>
        <div id="pop-tarts-body">
          <div id="pop-tarts-body-cream"></div>
        </div>
        <div id="head">
          <div id="face"></div>
        </div>
      </div>
    </div>
  )
}

export default Nyancat


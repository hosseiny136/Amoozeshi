import React from 'react';
import './style.css';
const Artistcard = props => {
  const { title, image, subtitle } = props.data;
  // console.log(myjson);
  //console.log(location);
  return (
    <div className="artist_card flex">
      <div className="artist_card_img">
        <img src={image.size.original} />
      </div>
      <div className="artist_card_desc">
        <h4>{title}</h4>
        <span>{subtitle}</span>
      </div>
    </div>

  );
}
export default Artistcard;

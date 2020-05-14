import React from 'react';
import './style.css';
const Sinemacard = props => {
  const { title, image, subtitle, showtime, price, location } = props.data;
  // console.log(myjson);
  //console.log(location);
  return (
    <div className="consert_card">
      <div className="consert_card-image rel">
        <div className="consert_card_unhover">
          <img src={image.size.original} alt="" />
        </div>
        <div className="consert_card_hover">
          <div className="consert_card_hover-content">
            <ul>
              <li className="consert_card_hover-location">{!!location ? location : ""}</li>
              <li className="consert_card_hover-time">{!!showtime ? showtime : ""}</li>
              <li className="consert_card_hover-price">{!!price ? price : ""}</li>
              <li className="consert_card_hover-viewticket"><a href="#">مشاهده و خرید بلیط</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="consert_card_footer text-cont">
        <h3 className="consert_card-title ">{title}</h3>
        <span className="consert_card-desc ">{subtitle}</span>
      </div>
    </div>
  );
}
export default Sinemacard;

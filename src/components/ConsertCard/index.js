import React from 'react';
import './style.css';
import myjson from './consert';
import bootstrap from 'reactstrap'
const Consertcard = props => {
  const data = myjson.data;
  const { title, image, showtime, subtitle, price,location } = data;
  console.log(myjson);
  return (
    <div>
      <div className="consert_card">
        <div className="consert_card-image rel">
          <div className="consert_card_unhover">
            <img src={image.size.original} alt="" />
          </div>
          <div className="consert_card_hover">
            <div className="consert_card_hover-content">
              <ul>
                <li className="consert_card_hover-location">{location[0].title}</li>
                <li className="consert_card_hover-time">{showtime}</li>
                <li className="consert_card_hover-price">{price}</li>
                <li className="consert_card_hover-viewticket"><a href="#">مشاهده و خرید بلیط</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="consert_card_footer">
          <h3 className="consert_card-title">{title}</h3>
          <span className="consert_card-desc">{subtitle}</span>
        </div>
      </div>
    </div>

  );
}
export default Consertcard;

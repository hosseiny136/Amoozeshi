import React from 'react';
import './style.css';
import myjson from './myhome';
import bootstrap from 'reactstrap'
const Sinemacard = props => {
  const data = myjson.data[7].items[0];
  const { title, image, showtime, subtitle, price, location } = data;
  console.log(myjson);
  console.log(data);
  return (
    <div className="consert_card">
    <div className="consert_card-image rel">
      <div className="consert_card_unhover">
        <img src={image.size.original} alt="" />
      </div>
      <div className="consert_card_hover">
        <div className="consert_card_hover-content">
          <ul>
           <li className="consert_card_hover-viewticket"><a href="#">مشاهده و خرید بلیط</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="consert_card_footer">
      <h3 className="consert_card-title text-cont">{title}</h3>
      <span className="consert_card-desc text-cont">{subtitle}</span>
    </div>
  </div>
  );
}
export default Sinemacard;

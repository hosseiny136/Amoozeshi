import React from 'react';
import './style.css';
import moment from 'jalali-moment'
const Newscard = props => {
  const { title, image, created_date } = props.data;
  // console.log(myjson);
  //console.log(location);
  return (
    <div class="news_card flex">
      <div class="news_card_img ">
        <img src={image.size.original}></img>
      </div>
      <div class="news_card_desc flex">
				<div class="news_card_desc-title">
          <h3>{title} </h3>
				</div>
				<div class="news_card_desc-bottom flex">
        <span class="date">{moment(created_date).locale('fa').format('YYYY/MM/DD')}</span>
				<span class="news_card_desc-bottom-continu">ادامه مطلب</span>
				</div>
      </div>
    </div>
  );
}
export default Newscard;

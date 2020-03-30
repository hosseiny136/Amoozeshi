import React from 'react';
import './style.css';

const Profilecard = props => {
  const { src, title, desc, rate, time } = props.data
  return (
    <div class="container">
      <div class="profile_mobile-course-card">
        <div class="profile_mobile-course-card-top clearfix">
          <img class="profile_mobile-course-card-img flr" src={src}></img>
          <div class="profile_mobile-course-card-bottom">
            <h3 class="profile_mobile-course-card-title card_title">{title}</h3>
            <span class="profile_mobile-course-card-by card_by">{desc}</span>
          </div>
        </div>

        <div class="profile_mobile-course-card-footer clearfix">
          <span class="profile_mobile-course-card-footer-rate flr"> &#9733; {rate}</span>
          <span class="rofile_mobile-course-card-footer-time fll">{time}</span>
        </div>
      </div>
    </div>
  );
}
export default Profilecard;

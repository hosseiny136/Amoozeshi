import React from 'react';
import './style.css';

const Profilecard = props => {
  const { src, title, desc, rate, time } = props.data
  return (
    <div className="container">
      <div className="profile_mobile-course-card">
        <div className="profile_mobile-course-card-top clearfix">
          <img className="profile_mobile-course-card-img flr" src={src}></img>
          <div className="profile_mobile-course-card-bottom">
            <h3 className="profile_mobile-course-card-title card_title">{title}</h3>
            <span className="profile_mobile-course-card-by card_by">{desc}</span>
          </div>
        </div>

        <div className="profile_mobile-course-card-footer clearfix">
          <span className="profile_mobile-course-card-footer-rate flr"> &#9733; {rate}</span>
          <span className="rofile_mobile-course-card-footer-time fll">{time}</span>
        </div>
      </div>
    </div>
  );
}
export default Profilecard;

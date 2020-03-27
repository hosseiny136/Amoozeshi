import React from 'react';
import './style.css';


class Profilecard extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    const {src,title,desc,rate,time}=this.props.data
    console.log(this.props);
  return (
<div class="container">
<div class="profile_mobile-course-card">
	<div class="profile_mobile-course-card-top clearfix">
	<img class="profile_mobile-course-card-img flr" src={src}></img>
  <p class="profile_mobile-course-card-title card_title">{title}</p>
  <p class="profile_mobile-course-card-by card_by">{desc}</p>
	</div>

<div class="profile_mobile-course-card-footer clearfix">
  <span class="profile_mobile-course-card-footer-rate flr"> &#9733; {rate}</span>
  <span class="rofile_mobile-course-card-footer-time fll">{time}</span>
</div>
</div>
</div>
  );
}
}
export default Profilecard;

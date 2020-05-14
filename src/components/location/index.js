import React from 'react';
import './style.css';
const Locationcard = props => {
  const { title, image, subtitle,city} = props.data;
  // console.log(myjson);
  //console.log(location);
  return (
    <div class="location_card">
			<div class="location_card-image">
				<img src={image.size.original} alt=""/> 
			</div>
			<div class="location_card_footer">
				<h3 class="location_card-title title">{title}</h3>
				<span class="location_card-desc sub_title">{city}</span>
			</div>
		</div>
  );
}
export default Locationcard;

import Carousel from "react-multi-carousel";
import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Sinemacard from '../sinema'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Example= props => {
  return (
<Carousel responsive={responsive}>
<div>
  item</div>
<div>item</div>
<div>item</div>
<div>item</div>
</Carousel>
  );
}
export default Example;
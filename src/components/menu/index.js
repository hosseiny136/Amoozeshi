import './style.css';
import  bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Button,Container, Row,Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Menu = props => {
  // console.log(myjson);
  //console.log(location);
  return (
    
		//  <div className="top">
		// 	<img src="https://mno.tik8.com/original/2020-3/ff2db210-5e2b-11ea-bba5-9fdec1194f5e.jpg" />
		// </div>
		<div className="header_bottom">
<Container>
  <Row>
  <Navbar>
    <Nav>
    
         <NavItem className="active"><NavLink href="#">صفحه اصلی</NavLink></NavItem>
         <NavItem ><NavLink href="#">تئاتر</NavLink></NavItem>
         <NavItem ><NavLink href="#">کنسرت</NavLink></NavItem>
         <NavItem ><NavLink href="#">سینما</NavLink></NavItem>
         <NavItem ><NavLink href="#">نمایش کودک</NavLink></NavItem>
         <NavItem ><NavLink href="#">نمایش کمدی</NavLink></NavItem>
         <NavItem ><NavLink href="#">کارگاه و همایش</NavLink></NavItem>
         <NavItem ><NavLink href="#">تفریحی</NavLink></NavItem>
         <NavItem ><NavLink href="#">میراث فرهنگی</NavLink></NavItem>
         <NavItem ><NavLink href="#">اتاق فرار</NavLink></NavItem>

        </Nav>
        </Navbar>
    <div className="rahgiri">
      <Button>پیگیری بلیط</Button>
  </div>

  </Row>
</Container>
</div>

	 ) }
export default Menu;

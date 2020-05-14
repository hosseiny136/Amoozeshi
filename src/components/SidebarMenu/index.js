import './style.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Button, Container, Row, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import dashboard from '../../images/dashboard.png'
import user from '../../images/user.png'
import service from '../../images/service.png'
import setting from '../../images/setting.png'
import pay from '../../images/pay.png'
import shraj from '../../images/sharj.png'
import support from '../../images/support.png'
import pass from '../../images/pass.png'
import exit from '../../images/exit.png'
const SidebarMenu = props => {
  const { notif } = props;
  return (
    <Navbar color="faded">
      <Nav navbar>
        <NavItem className="flex"><NavLink href="#"><img src={dashboard} /><span> داشبورد کاربری</span></NavLink></NavItem>
        <NavItem className="flex" ><NavLink href="#" className="active"><img src={service} /><span>سرویس های من</span></NavLink>
          <span className="number">1</span>
        </NavItem>
        <NavItem className="flex"><NavLink href="#"><img src={user} /><span>اطلاعات کاربری</span></NavLink></NavItem>
        <NavItem className="flex" ><NavLink href="#"><img src={setting} /><span>تنظیمات افزونه</span></NavLink>
          <span className="number">1</span>
        </NavItem>
        <NavItem className="flex"><NavLink href="#"><img src={pay} /><span>پرداخت ها</span></NavLink></NavItem>
        <NavItem className="flex"><NavLink href="#"><img src={shraj} /><span>شارژ حساب</span></NavLink></NavItem>
        <NavItem className="flex"><NavLink href="#"><img src={support} /><span>پشتیبانی</span></NavLink></NavItem>
        <NavItem ><NavLink href="#"><img src={pass} /><span>تغییر رمز عبور</span></NavLink></NavItem>
        <NavItem ><NavLink href="#"><img src={exit} /><span>خروج</span></NavLink></NavItem>
      </Nav>
    </Navbar>
  )
}
export default SidebarMenu;

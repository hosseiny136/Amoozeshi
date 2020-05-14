import React, { Children } from 'react';
import './style.css';
import { Button, Row,Col } from 'reactstrap';
import SidebarMenu from '../SidebarMenu'
const Profilethem = props => {
  const {title, children,txt,notif} = props
  return (
   
      <Row>
        <Col xl="3">
      <div className="ProfileSidebar"> <SidebarMenu notif="1"/></div></Col>
      <Col  xl="9">
      <div className="profile-theme">
      <div className="theme-top flex">
      <h1>{title}</h1>
     { !!txt &&
        <Button  className="profile-theme-button" style={{display:"block"}} color="success">{txt}</Button>
      }

      </div>
    {children}
 
  </div>
  </Col>
  </Row>
  );
}
export default Profilethem;

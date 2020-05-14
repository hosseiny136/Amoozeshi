import React, { Component } from 'react';
import './App.css';
//import cardProfile from './images/card-profile.png'
import ProfileCard from './components/ProfileCard'
import Login from './components/login'
import Sinemacard from './components/sinema'
import Artistcard from './components/artist'
import Newscard from './components/news'
import myjson from './myhome'
import Locationcard from './components/location'
import Slider from './components/Slider'
import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'
import { Container, Row } from 'reactstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import Example from './components/example'
import ProfileUser from './components/ProfileUser'
import Profilethem from './components/ProfileTemplate'
import Profilepass from './components/passprofile'
import ProfileService from './components/ProfileService'

const App = props => {
  // const profileCardData = {
  //   src: cardProfile,
  //   title: "آموزش جاوااسکریپت از مقدماتی تا...",
  //   desc: "توسط : محمد صاحبی",
  //   rate: "3.8",
  //   time: "00:45:20"
  // }
  //console.log({ data: myjson.data });
  return (
    
     
      <Container>
      {/* <Profilethem title="اطلاعات کاربری">
        <ProfileUser/>
      </Profilethem> */}
      {/* <Profilethem title="تغییر رمز عبور">
        < Profilepass/>
      </Profilethem> */}
     <Profilethem title="سرویس های من" txt="سرویس جدید" notif="1">
        < ProfileService/>
      </Profilethem>
     
      
     {
     
      /* <Header />
      <Menu />
      <div className="flexcol">
        {
          myjson.data.map((item, index) => {

            switch (index) {

              case 6:
                return (
                  <div style={{ order: "0" }}>
                    <Slider data={item.items.desktop} />
                  </div>
                )
                break;
              case 7:
                return (
                  <Container className="margin-top" style={{ order: "1" }} >
                    <div className="tit">
                      <h2>سینما </h2>
                    </div>
                    <div className="flex">

                      {
                        item.items.map((desk, index) => (
                          <Sinemacard data={desk} />
                        )
                        )

                      }
                    </div>
                  </Container>
                )
                break;
              case 1:
                return (
                  <Container className="margin-top" style={{ order: "2" }} >
                    <div className="tit">
                      <h2>اخبار </h2>
                    </div>
                    <div className="flex" >

                      {
                        item.items.map((desk, index) => (
                          <Newscard data={desk} />
                        )
                        )

                      }
                    </div>
                  </Container>
                )
                break;

              case 50:
                return (
                  <Container>
                    <Row className="flex">
                      <h2>کنسرت </h2>
                      {
                        item.items.map((desk, index) => (
                          <Sinemacard data={desk} />
                        )
                        )

                      }
                    </Row>
                  </Container>
                )
                break;
              case 120:
                return (
                  <Container>
                    <Row className="flex">
                      <h2>هنرمندان </h2>
                      {
                        item.items.map((desk, index) => (
                          <Artistcard data={desk} />
                        )
                        )

                      }
                    </Row>
                  </Container>
                )
                break;
              case 114:
                return (
                  <Container>
                    <Row className="flex">
                      <h2>سالن های برگزاری </h2>
                      {
                        item.items.map((desk, index) => (
                          <Locationcard data={desk} />
                        )
                        )

                      }
                    </Row>
                  </Container>
                )
                break;

            }


          })
        }
      </div>
      <Footer/> */}
   
    </Container>
  )
}
export default App;

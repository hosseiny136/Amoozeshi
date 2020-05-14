import React from 'react';
import './style.css';
import { Container, Row } from 'reactstrap';
import  bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo1 from '../../images/logo-aspx.png'
import social from '../../images/aparat.png'
import namad from '../../images/logo-namad.png'
import chilivery from '../../images/chilivery-logo.png'
import drdr from '../../images/drdr-logo.png'
import netbarg from '../../images/NetBarg-Logo3.png'
import saremiz from '../../images/saremiz-logo.jpg.png'
const Footer= props => {
  // console.log(myjson);
  //console.log(location);
  return (
    
		//  <div className="top">
		// 	<img src="https://mno.tik8.com/original/2020-3/ff2db210-5e2b-11ea-bba5-9fdec1194f5e.jpg" />
		// </div>
    <footer>
    <div className="footer-top">
      <Container>
        <Row>
          <div className="footer_menu-bottom col-xl-6 flex">
            <div className="footer_menu1">
              <ul>
                <li className="titr">تیکت</li>
                <li><a>
                    درباره تیکت
                  </a> </li>
                <li><a>قوانین و مقررات</a></li>
                <li><a>حریم خصوصی</a></li>
              </ul>
            </div>
            <div>
              <ul >
                <li className="titr">بیشتر بدانید</li>
                <li><a>
                    راهنمای خرید
                  </a> </li>
                <li><a>راهنمای
                    پرداخت
                  </a> </li>
                <li><a>سوالات متداول</a></li>

              </ul>
            </div>
            <div>
              <ul >
                <li className="titr">ارتباط با ما</li>
                <li><a>تماس با ما </a> </li>
                <li>همکاری با ما</li>
              </ul>
            </div>
            <div>
              <ul >
                <li className="titr">سایر</li>
                <li>مجله تیکت
                </li>
                <li>مکان های نمایش</li>
                <li>شخصیت ها</li>
                <li>آخرین اخبار</li>
                <li>آرشید رویدادها</li>
              </ul>
            </div>
          </div>
          <div className="footer_jvayez flex">
            <div className="footer_namad">
              <img src="https://tik8.com/images/footer-namad-3.png" />
              <img src={logo1}/>
              <img src={namad} />
            </div>
            <div className="social">
              <div className="footer_social-media-top">
                <img src="https://tik8.com/images/logo-app-store.png" />
                <img src="https://tik8.com/images/logo-app-bazaar.png" />
              </div>
              <div className="footer_social-media-bottom ">
                <img src={social} />
                <img src={social} />
                <img src={social} />
                <img src={social} />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
    <div className="footer_bottom-copyright">
      <Container>
        کليه حقوق اين وب سایت متعلق به شرکت کسب و کار نوین ایرانیان با نام
        تجاری
        تیکت می‌باشد. © ۱۳۹۹ - 1393
      </Container>
    </div>
    <div className="footer_bottom-another">
      <Container>
        <div className="footer_bottom-brand">
          <img src={chilivery} />
          <img src={drdr} />
          <img src={netbarg} />
          <img src={saremiz} />
        </div>
        <div className="footer_bottom-about">
          <p>
            شرکت کسب و کار نوین ایرانیان که با فعالیت در حوزه کسب و کار الکترونیک شناخته شده است، با هدف ایجاد
            سامانه خرید آنلاین بلیط رویدادهای فرهنگی، هنری، اجتماعی، ورزشی در بهمن ماه سال 93 با راه اندازی سایت
            اینترنتی www.Tik8.com مأموریت جدید خود را آغاز کرده است. تیکت با فراهم ساختن بستر مناسب با ساختاری
            نوین
            و عملکرد آسان امکان خرید آنلاین بلیط رویدادهای هنری شامل تئاتر، سینما، کنسرت، رویدادهای علمی شامل
            کنفرانس، همایش و رویدادهای ورزشی مختلف را برای مخاطبان گرامی ایجاد کرده است. از طریق وب سایت و
            اپلیکیشن
            تیکت بلیط رویداد مورد نظرتان را فقط در چند مرحله ساده با کوتاهترین زمان خریداری کنید. تیکت با رویکرد
            حمایت از علاقمندان به حضور در رویدادهای هنری، علمی و ورزشی در مسیر آسان تر نمودن تجربه سرگرمی برای
            اقشار
            مختلف، تصمیم دارد با ایجاد شرایط متنوع، امکان حضور علاقمندان را به جذاب ترین شیوه ها فراهم سازد.
          </p>
        </div>
      </Container>
    </div>

  </footer>
  );
}
export default Footer;

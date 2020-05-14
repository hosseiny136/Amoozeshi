import React from 'react';
import './style.css';
import { Container, Row,Button } from 'reactstrap';
import  bootstrap from 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/logo.jpg'
const Header = props => {
  // console.log(myjson);
  //console.log(location);
  return (
	// 	<div class="top">
	// 	<img src="https://mno.tik8.com/original/2020-3/ff2db210-5e2b-11ea-bba5-9fdec1194f5e.jpg" />
	// </div>
		 <header>
			<div className="header_top flex">
				<Container>
					<Row>
						<div className="header_logo ">
							<img className="header_logo-img" src={logo} />
						</div>
						<div className="header_search rel  ">
							<div className="header_searchbtn">
								<Button><i className="fa fa-search"></i>

								</Button>
							</div>
							<input className="header_search-input" type="text" placeholder="جستجو مکان، رویداد " />
						</div>
						<div className="header_login ">
							<span>ورود | عضویت <i className="fa fa-user"></i></span>
						</div>

					</Row>
				</Container>
			</div>
			</header>
	
  );
}
export default Header;

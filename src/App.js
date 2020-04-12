import React from 'react';
import './App.css';
import cardProfile from './images/card-profile.png'
import ProfileCard from './components/ProfileCard'
import Login from './components/login'
import ConsertCard from './components/ConsertCard'
import bootstrap from 'reactstrap'
import  Sinemacard from './components/sinema'
const App =props => {
    const profileCardData={   src: cardProfile,
      title:"آموزش جاوااسکریپت از مقدماتی تا...",
      desc:"توسط : محمد صاحبی",
      rate:"3.8",
      time:"00:45:20"}
  return (
<div className="container">
{/* <ProfileCard data={profileCardData}/> */}
{/* <Login/> */}
{/* <ConsertCard/> */}
<Sinemacard/>

</div>
  );
}

export default App;

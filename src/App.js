import React from 'react';
import './App.css';
import cardProfile from './images/card-profile.png'
import ProfileCard from './components/ProfileCard'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
   
    }
  }
  render(){
    const profileCardData={   src: cardProfile,
      title:"آموزش جاوااسکریپت از مقدماتی تا...",
      desc:"توسط : محمد صاحبی",
      rate:"3.8",
      time:"00:45:20"}
  return (
<div class="container">
<ProfileCard data={profileCardData}/>
</div>
  );
}
}
export default App;

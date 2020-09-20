import React, { Component } from 'react';
import data from "./data.json";
import "./App.css";
import { SocialIcon } from 'react-social-icons';
import fullpage from './components/Fullpage';
import TitleAndIcon from './components/TitleAndIcon';
 

class App extends Component {
  
  render() { 
    return ( 
      <div className="App">
        <div className="navigation"></div>
       
       <TitleAndIcon/>
<div className="fullpage second">
  <h2 className="title">
    {
      data.sections[0].title
      }
      <p>
        {data.sections[0].items[0].content}
      </p>
    
    </h2> 
</div>
  <div className="fullpage third">
    
    <h2>
      {data.sections[1].title}
    </h2>
   <div className="tt-card">
     {
     data.sections[1].items.map(skills =>{
      return(
        <div className="card">
        <div className="image-tt">
        <img src={skills.content.image} alt=""/></div>

          <div className="skills-tittle-tt">
            <h4>
              {skills.content.title}
            </h4>
          </div>

        </div>

      )})}
   </div>
  </div>
</div>
     );
  }
}
 
export default App;



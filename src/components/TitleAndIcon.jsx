import React, { Component } from 'react';
import data from "../data.json";
import { SocialIcon } from 'react-social-icons';
class TitleAndIcon
 extends Component {
    state = {  }
    render() { 
        return ( <div>
             <fullpage className="first">
        <h1 className ="title">
  {data.title}
</h1>

<div>
  <h2>
    {data.subtittle}
  </h2>
</div>
<div>
{
  Object.keys(data.links).map(key =>{
    return(
      <SocialIcon url={data.links[key]} />
    )
  })
}





</div>
        </fullpage> 
        </div> );
    }
}
 
export default TitleAndIcon
;
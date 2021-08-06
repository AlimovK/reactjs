import './index.css';
import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Body from "./body";
import './App.css'

class info extends React.Component {
  render(){
    return(
      <div id='main'>
       <Sidebar />
          <div id='main2'>
          <Navbar startes='Start' drive='Drive'
                  maintin='Maintinance' battery='Battery' tires='Tires'
          loced='Lock'/>
        <Body />
          </div>
      </div>
    )
  }
} 
export default info

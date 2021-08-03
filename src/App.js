import './index.css';
import React from "react";


class info extends React.Component {
  render(){
    return(
      <div>
        <h2>ID:{this.props.id}</h2>
        <h2>Name:{this.props.name}</h2>
      </div>
    )
  }
} 
export default info
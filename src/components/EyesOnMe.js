// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{

Focus=()=>{
  console.log("Good!")
}
Blur=()=>{
  console.log("Hey! Eyes on me!")
}
  render(){
    return(
      <button onFocus={this.Focus} onBlur={this.Blur}></button>
    )
  }
}

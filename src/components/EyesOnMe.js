// Code EyesOnMe Component Here

import React from 'react'

export default class EyesOnMe extends React.Component{

    handleFoucus=()=>{
        console.log("Good!")
    }

    handleBlur=()=>{
        console.log("Hey! Eyes on me!")
    }

    render(){
        return (
            <button onFocus={this.handleFoucus} onBlur={this.handleBlur}>Me</button>
        )
    }
}


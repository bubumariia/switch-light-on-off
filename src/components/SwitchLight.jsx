import React, { Component } from 'react';
class Switch extends Component {
    constructor(){
        super()
        this.state = { 
            imgURL:'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png',
            mode:false
         }
    }
    
     handleClick = ()=>{
        {
            if(this.state.mode){
                this.setState({imgURL:'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png', mode:!this.state.mode })
            }else{
                this.setState({imgURL:'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png',mode:!this.state.mode})
            }
        }
    } 
    
    render() { 
        return (
            <div className='container'>
                <h1>Turn the light on and off by clicking the bulb!</h1> 
               <img  src={this.state.imgURL} onClick={this.handleClick} alt="" />
            </div>
               
           
        );
    }
    
}
 
export default Switch;
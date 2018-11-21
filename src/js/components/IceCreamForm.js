import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { observer,inject  } from 'mobx-react';

@inject("store")
@observer
 class IceCreamForm extends Component {
  
     @observable iceCream = {flavor:"",  color:""};
    
   @action inputChange = (e)=>{
        this.iceCream[e.target.name] = e.target.value;
    }
        submitForm = (e)=>{
            this.props.store.addIceCream(this.iceCream.flavor,this.iceCream.color);
            this.iceCream.flavor = "";
            this.iceCream.color = "";
       }
    
    render() {
      return (
        <div className="container">
          <input type="text" name="flavor" onChange={this.inputChange} value={this.iceCream.flavor}/>
          <input type="text" name="color" onChange={this.inputChange} value={this.iceCream.color}/>
          <input type="button" onClick={this.submitForm} value="submit"/> submit </div> ); 
      } 
  }
  export default IceCreamForm;
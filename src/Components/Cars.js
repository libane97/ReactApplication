import React, { Component } from 'react';
import MyCars from "./MyCars";
class Cars extends Component {

   state = {
         test: "Test test test"
    }

    render() {
        console.log(this);
         return(
              <div>
                <h1>{this.props.title}</h1>
                <MyCars color="red">Forde</MyCars>
                <MyCars>Toyota</MyCars>
                <MyCars color="blue"></MyCars>
              </div>
         );
    }
}

export default Cars;
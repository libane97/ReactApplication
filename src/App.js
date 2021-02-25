import logo from './logo.svg';
import React, { Component } from 'react';
import Cars from './Components/Cars';
import './App.css';

class App extends Component {

    state = {
       titre: "Mon Catalogue de voiture"
    }

    render() {
        return(
            <div className="App">
                  <Cars title={this.state.titre} />
            </div>
        )
    }
}

export default App;
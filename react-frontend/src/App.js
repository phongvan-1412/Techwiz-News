import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './user/layout/Header'


class App extends Component {
  render(){
    return ( 
      <Router>
        <div className="App">
            <Header />

        </div>
      </Router>

    );
  }
}

export default App;

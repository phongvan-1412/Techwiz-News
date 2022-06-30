import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from 'react-router-dom';

import Content from './Content';

class Content extends Component {
  render() {
    return (
        <Consumer>
        {(value) => {
          const { spotlights } = value;
          return (
            <div className="App">
              {spotlights.map((spotlight) => (
                <Content
                  key={spotlight.blog_id}
                  content={spotlight}
                ></Content>
              ))}              
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Content;
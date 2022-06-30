import React, { Component } from "react";
import { Consumer } from "../../layout/context";
import { Link } from 'react-router-dom';
import MainBodyComponent from "../MainBodyComponent";


class MainBodyContent extends Component {
    render() {
      return (
        <Consumer>
            {(value) => {
            const { spotlights } = value;
            const q = [];
            const ourSpotlights = q.concat(spotlights);
            ourSpotlights.length = 1;
            return (
                <div>
                {ourSpotlights.map((spotlight) => (
                <MainBodyComponent
                    key={spotlight.blog_id}
                    content={spotlight}
                ></MainBodyComponent>
                ))}
            </div>
            )}}
        </Consumer>
      );
    }
  }
  export default MainBodyContent;
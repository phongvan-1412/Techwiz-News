import React, { Component } from "react";
import { Consumer } from "../context";
import { Link } from 'react-router-dom';

import HeaderComponent from "./HeaderComponent";

class HeaderContent extends Component{
    render(){
        return(
            <Consumer>
                {(value) => {
                const { spotlights } = value;
                const q = [];
                const ourSpotlights = q.concat(spotlights);
                ourSpotlights.length = 1;
                return (
                    <div>
                    {ourSpotlights.map((spotlight) => (
                      <HeaderComponent
                        key={spotlight.blog_id}
                        content={spotlight}
                      ></HeaderComponent>
                    ))}
                  </div>
                )}}
        </Consumer>
        )
    }
}

export default HeaderContent;
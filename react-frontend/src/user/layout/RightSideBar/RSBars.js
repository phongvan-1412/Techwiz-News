import React, { Component } from "react";
import RSBar from "./RSBar";
import { Consumer } from "../LeftSideBar/context";

class RSBars extends Component {
  render() {
        return (
            <Consumer>
                {value => {
                    const { rsbars } = value;
                    return (
                        <div style={{width:'300px'}}>
                            <h6 className="">
                                <span className="">Exclusive Clips</span> 
                            </h6>
                        {rsbars.map(lsbar=>(
                            <RSBar 
                            key = {lsbar.id}
                            lsbar = {lsbar} 
                            />
                        ))}
                        </div>
                    )}
                }
        </Consumer>
        )
    }
}
export default RSBars;

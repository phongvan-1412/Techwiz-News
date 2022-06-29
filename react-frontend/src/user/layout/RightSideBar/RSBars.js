import React, { Component } from "react";
import RSBar from "./RSBar";
import { Consumer } from "../Body/context";

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
                        {rsbars.map(content=>(
                            <RSBar 
                            key = {content.id}
                            content = {content} 
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

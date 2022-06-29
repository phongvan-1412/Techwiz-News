import React, { Component } from "react";
import LSBar from "./LSBar";
import { Consumer } from "../Body/context";

class LSBars extends Component {
  render() {
        return (
            <Consumer>
                {value => {
                    const { lsbars } = value;
                    return (
                        <div style={{width:'300px'}}>
                            <h6 className="">
                                <span className="">Exclusive Clips</span> 
                            </h6>
                        {lsbars.map(content=>(
                            <LSBar 
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
export default LSBars;

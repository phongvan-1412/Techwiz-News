import React, { Component } from "react";
import LSBar from "./LSBar";
import { Consumer } from "./context";

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
                        {lsbars.map(lsbar=>(
                            <LSBar 
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
export default LSBars;

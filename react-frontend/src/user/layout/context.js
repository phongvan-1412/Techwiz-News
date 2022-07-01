import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    spotlights: [
     
    ],
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/returnallpost")
      .then((res) => this.setState({ spotlights: res.data }));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

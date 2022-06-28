import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    spotlights: [
      {
        blog_id: "1",
        emp_name: "Phuong",
        blog_title: "title 1",
        blog_content: "wwwwwwwwwwwwwwwwwwwwwwwwwww",
        blog_day_open: "12/01/1991",
        blog_status: "1",
      },
      {
        blog_id: "2",
        emp_name: "Phuong1",
        blog_title: "title 2",
        blog_content: "eeeeeeeeeeeeeeeeeeeeeeee",
        blog_day_open: "12/01/2000",
        blog_status: "1",
      },
      {
        blog_id: "3",
        emp_name: "Phuong2",
        blog_title: "title 3",
        blog_content: "qqqqqqqqqqqqqqqqqqqqqqq",
        blog_day_open: "12/12/2021",
        blog_status: "1",
      },
      {
        blog_id: "4",
        emp_name: "Phuong3",
        blog_title: "title 4",
        blog_content: "rrrrrrrrrrrrrrrrrrrrrrrrr",
        blog_day_open: "12/01/2022",
        blog_status: "1",
      },
    ],
    //   dispatch: (action) => {
    //     this.setState((state) => reducer(state, action));
    //   },
  };

  render() {
    return (
      <Context.Provider value={this.state} className="row">
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

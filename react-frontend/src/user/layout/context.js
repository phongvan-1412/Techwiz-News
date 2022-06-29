import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    spotlights: [
      {
        blog_id: 1,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category4"
      },
      {
        blog_id: 2,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_link: "aadf",
        blog_img_name: "adf",
        category_name: "category4"

      },
      {
        blog_id: 3,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category4"
      },
      {
        blog_id: 4,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category4"
      },
      {
        blog_id: 1,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category3"
      },
      {
        blog_id: 2,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_link: "aadf",
        blog_img_name: "adf",
        category_name: "category3"

      },
      {
        blog_id: 3,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category3"
      },
      {
        blog_id: 4,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category3"
      },
      {
        blog_id: 1,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category2"
      },
      {
        blog_id: 2,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_link: "aadf",
        blog_img_name: "adf",
        category_name: "category2"

      },
      {
        blog_id: 3,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category2"
      },
      {
        blog_id: 4,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category2"
      },
      {
        blog_id: 1,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category1"
      },
      {
        blog_id: 2,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_link: "aadf",
        blog_img_name: "adf",
        category_name: "category1"

      },
      {
        blog_id: 3,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category1"
      },
      {
        blog_id: 4,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_link: "abs",
        blog_img_name: "adf",
        category_name: "category1"
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

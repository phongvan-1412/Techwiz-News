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
        blog_img_name: "111111111111",
        category_name: "category4"
      },
      {
        blog_id: 2,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "13/02/1992",
        blog_status: "1",
        blog_img_name: "222222222222",
        category_name: "category4"

      },
      {
        blog_id: 3,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_img_name: "333333333333",
        category_name: "category4"
      },
      {
        blog_id: 4,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_img_name: "444444444444",
        category_name: "category4"
      },
      {
        blog_id: 5,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_img_name: "666666666666",
        category_name: "category3"
      },
      {
        blog_id: 6,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_img_name: "777777777777",
        category_name: "category3"

      },
      {
        blog_id: 7,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_img_name: "5555555555555",
        category_name: "category3"
      },
      {
        blog_id: 8,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_img_name: "88888888888888",
        category_name: "category3"
      },
      {
        blog_id: 9,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_img_name: "999999999999999",
        category_name: "category2"
      },
      {
        blog_id: 10,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_img_name: "aaaaaaaaaaaaaa",
        category_name: "category2"

      },
      {
        blog_id: 11,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_img_name: "eeeeeeeeeeee",
        category_name: "category2"
      },
      {
        blog_id: 12,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_img_name: "rrrrrrrrrrrrrrrrrrr",
        category_name: "category2"
      },
      {
        blog_id: 13,
        emp_name: "Phuong",
        blog_title: "FAULKNER FOCUS",
        blog_content: "Raymond Arroyo: Hunter Biden is the 'Michael Myers of the Biden admin'",
        blog_day_open: "12/01/1991",
        blog_status: "1",
        blog_img_name: "qqqqqqqqqqqqqq",
        category_name: "category1"
      },
      {
        blog_id: 14,
        emp_name: "Phuong1",
        blog_title: "AMERICA'S NEWSROOM",
        blog_content: "Chad Wolf: We have no deterrence in our immigration system",
        blog_day_open: "12/01/2000",
        blog_status: "1",
        blog_img_name: "uuuuuuuuuuuuuuuuuu",
        category_name: "category1"

      },
      {
        blog_id: 15,
        emp_name: "Phuong2",
        blog_title: "FOX & FRIENDS",
        blog_content: "Rachel Campos-Duffy and Sean Duffy celebrate nephew winning Stanley Cup",
        blog_day_open: "12/12/2021",
        blog_status: "1",
        blog_img_name: "wwwwwwwwwwwwwww",
        category_name: "category1"
      },
      {
        blog_id: 16,
        emp_name: "Phuong3",
        blog_title: "FOX & FRIENDS FIRST",
        blog_content: "Putin can fund his war machine 'indefinitely' until Biden opens up US oil spigots: Rep. Waltz",
        blog_day_open: "12/01/2022",
        blog_status: "1",
        blog_img_name: "yyyyyyyyyyyyyyy",
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

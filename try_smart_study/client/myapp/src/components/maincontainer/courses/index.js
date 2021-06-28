import { Component } from "react";

import { Button } from "rsuite";
import "./index.css";

const userDetailsList = [
  {
    uniqueNo: 1,
    name: "Engineering",
  },
  {
    uniqueNo: 2,
    name: "BCom",
  },
  {
    uniqueNo: 3,
    name: "BBA",
  },
  {
    uniqueNo: 4,
    name: "BA",
  },
  {
    uniqueNo: 5,
    name: "BFA",
  },
  {
    uniqueNo: 6,
    name: "BMS",
  },
];

class Courses extends Component {
  getRandomQuote = (event) => {
    return fetch("https://localhost:3300/")
      .then((response) => response.json())
      .then((data) => data.content);
  };
  userDetailsList = () => (
    <ul className="skills-list">
      {userDetailsList.map((skill) => (
        <li className="skill-item" key={skill.id}>
          <Button appearance="default" onClick={this.getRandomQuote}>
            {skill.name}
          </Button>
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        <div>
          <h1>course</h1>
          <div className="">{this.userDetailsList()}</div>
        </div>
      </div>
    );
  }
}

export default Courses;

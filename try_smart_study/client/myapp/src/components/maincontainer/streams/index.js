import { Component } from "react";
import { Button } from "rsuite";
import "./index.css";

const EducationalStreamList = [
  {
    uniqueNo: 1,
    name: "Electrical and Electronics Engineering",
  },
  {
    uniqueNo: 2,
    name: "Civil Engineering",
  },
  {
    uniqueNo: 3,
    name: "Electrical and Electronics Engineering ",
  },
  {
    uniqueNo: 4,
    name: "civil Engineering",
  },
  {
    uniqueNo: 5,
    name: "Computer Engineering",
  },
  {
    uniqueNo: 6,
    name: "mining Engineering",
  },
  {
    uniqueNo: 7,
    name: "civil Engineering",
  },
];
class Streams extends Component {
  search = (event) => {
    alert("open universities");
  };
  EducationalStreamList = () => (
    <ul className="skills-list">
      {EducationalStreamList.map((skill) => (
        <li className="skill-item" key={skill.id}>
          <Button appearance="subtle" onClick={this.search}>
            {skill.name}{" "}
          </Button>
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        <div>
          <h1>streams</h1>
          <div className="skills-container">{this.EducationalStreamList()}</div>
        </div>
      </div>
    );
  }
}

export default Streams;

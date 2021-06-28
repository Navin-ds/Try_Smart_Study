import { Component } from "react";
import { Button } from "rsuite";
import "./index.css";
const subjectsList = [
  { uniqueNo: 1, name: "Electro magnetism" },
  { uniqueNo: 2, name: "Electrical" },
  { uniqueNo: 3, name: "Computer Science" },
  { uniqueNo: 4, name: "Mining" },
];

class Subjects extends Component {
  search = (event) => {
    alert("try for free");
  };
  SubjectsList = () => (
    <ul className="skills-list">
      {subjectsList.map((skill) => (
        <li className="skill-item" key={skill.id}>
          <Button appearance="subtle" onClick={this.search}>
            {skill.name}
          </Button>
        </li>
      ))}
    </ul>
  );

  render() {
    return (
      <div>
        <h1>subjects</h1>
        <div>
          <div className="skills-container">{this.SubjectsList()}</div>
        </div>
      </div>
    );
  }
}

export default Subjects;

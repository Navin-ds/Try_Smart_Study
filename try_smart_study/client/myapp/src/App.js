import "./App.css";
import { Navbar } from "rsuite";
import Courses from "./components/maincontainer/courses/index";
import Semester from "./components/maincontainer/semesters/index";
import Streams from "./components/maincontainer/streams/index";
import Subjects from "./components/maincontainer/subjects/index";
import { BrowserRouter } from "react-router-dom";
import Universities from "./components/maincontainer/universities";

function App() {
  return (
    <div className="try_smart_study">
      <Navbar className="nav">
        <Navbar.Header>
          <p href="#" className="navbar-brand logo">
            app logo
          </p>
        </Navbar.Header>
        <div className="nav-body">
          <p className="body">Engineering</p>
          <p className="body">Course Material</p>
          <p className="body">UpSkills</p>
          <p className="body">Books</p>
          <p className="body">Universities</p>
        </div>
        <div>
          <button className="button">login</button>
        </div>
      </Navbar>

      <div className="main-container">
        <div className="profile-card-container">
          <div className="image-container">
            <img
              src="https://images.yourstory.com/cs/images/companies/Goseeko-1620050071674-1620373886067.png"
              alt="avatar"
              className="profile-image"
            />
          </div>
          <h1>hi wold</h1>
          <p>
            i am something ex which is against the against.smile for keeping
            cool
          </p>
        </div>
        <div className="second-container">
          <h1>Try Smart Study</h1>
          <div></div>
          <form>
            <BrowserRouter>
              <Courses />
              <Streams />
              <Universities />
              <Semester />
              <Subjects />
            </BrowserRouter>
          </form>
          <h1 className="headingFor">Try for free</h1>
        </div>
      </div>
    </div>
  );
}

export default App;

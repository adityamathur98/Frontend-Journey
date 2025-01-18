import UserProfile from "./Components/UserProfile";

import "./App.css";

const userDetailsList = [
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Aditya",
    role: "Software Engineer",
  },
  {
    id: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Shreyash",
    role: "Architect",
  },
  {
    id: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Priyansh",
    role: "Civil Engineer",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Jacob",
    role: "Electrical Engineer",
  },
];

const App = () => (
  <div className="list-container">
    <h1 className="title">User</h1>
    <ul>
      {userDetailsList.map((eachObject) => (
        <UserProfile userDetails={eachObject} key={eachObject.id} />
      ))}
    </ul>
  </div>
);

export default App;

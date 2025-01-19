import CardItem from "./Components/CardItem";

import "./App.css";

const cardsList = [
  {
    id: 1,
    title: "Data Scientist",
    description:
      "Data scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
    className: "card-1",
  },
  {
    id: 2,
    title: "IOT Developer",
    description:
      "IoT Developers are professionals who can develop, manage, and monitor IoT devices.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
    className: "card-2",
  },
  {
    id: 3,
    title: "VR Developer",
    description:
      "A VR developer creates completely new digital environments that people can see.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
    className: "card-3",
  },
  {
    id: 4,
    title: "ML Engineer",
    description:
      "Machine learning engineers feed data into models defined by data scientists.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
    className: "card-4",
  },
];

const App = () => (
  <div className="card-app-container flex justify-center items-center">
    <div className="card-list-container flex flex-col justify-center items-center mt-[48px]">
      <h1 className="heading text-center font-bold text-[48px]">
        Learn 4.0 Technologies
      </h1>
      <p className="text-center text-[18px] mt-[24px] description">
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in Product Development.
      </p>
      <ul className="card-list flex justify-center items-center flex-wrap mt-[32px] pl-0">
        {cardsList.map((eachCard) => (
          <CardItem key={eachCard.id} cardDetails={eachCard} />
        ))}
      </ul>
    </div>
  </div>
);
export default App;

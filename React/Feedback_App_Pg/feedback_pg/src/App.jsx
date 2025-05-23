import Feedback from "./Feedback";

import "./App.css";

const resources = {
  emojis: [
    {
      id: 0,
      name: "Sad",
      imageUrl: "https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png",
    },
    {
      id: 1,
      name: "None",
      imageUrl: "https://assets.ccbp.in/frontend/react-js/none-emoji-img.png",
    },
    {
      id: 2,
      name: "Happy",
      imageUrl: "https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png",
    },
  ],
  loveEmojiUrl: "https://assets.ccbp.in/frontend/react-js/love-emoji-img.png",
};

const App = () => <Feedback resources={resources} />; //<CreditCard />;

export default App;

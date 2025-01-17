const element = (
  <div className="congrats-card-bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt="user-img"
        className="profile-img"
      />
      <h1 className="card-title">Kiran V</h1>
      <p className="card-description">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        alt="watch-img"
        className="watch-img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

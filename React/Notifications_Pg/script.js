const Notification = (props) => {
  const { message, className, iconImg } = props;
  const contaierClassName = `notification-container ${className}`;

  return (
    <div className={contaierClassName}>
      <img src={iconImg} className="icon" />
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  <div className="notification-bg-container">
    <h1 className="heading">Notification</h1>
    <div className="notification-list-container">
      <Notification
        message="Infomation Message"
        className="primary-bg-container"
        iconImg="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        message="Success Message"
        className="success-bg-container"
        iconImg="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        message="Warning Message"
        className="warning-bg-container"
        iconImg="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        message="Error Message"
        className="error-bg-container"
        iconImg="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

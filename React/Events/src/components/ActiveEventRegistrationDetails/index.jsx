const registractionStatus = {
  yetToRegister: "YET_TO_REGISTER",
  registered: "REGISTERED",
  registrationsClosed: "REGISTRATIONS_CLOSED",
};

const ActiveEventRegistrationDetails = (props) => {
  const { activeEventRegistrationStatus } = props;

  const renderNoActiveEventView = () => {
    return (
      <p className="text-center self-start text-[#64748b] font-[500] leading-[1.75] m-0 mt-[64px] mx-[16px]">
        Click on an event, to view its registration details
      </p>
    );
  };

  const renderYetToRegisterView = () => {
    return (
      <div className="flex flex-col items-center w-[90%]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="w-[90%] max-w-[461px]"
        />
        <p className="text-center text-[#64748b] text-[19px] leading-[1.5] m-0 mt-[48px]">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button
          type="button"
          className="text-center text-white text-base font-medium leading-normal bg-[#0967d2] w-[90%] border-none rounded-lg mt-12 py-3 outline-none cursor-pointer">
          Register Here
        </button>
      </div>
    );
  };

  const renderRegisteredView = () => {
    return (
      <div className="flex flex-col items-center w-[90%]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="w-[80%] max-w-[100px]"
        />
        <h1 className="text-center text-[#323f4b] text-[24px] font-[600] leading-[1.2] m-0 mt-[40px]">
          You have already registered for the event
        </h1>
      </div>
    );
  };

  const renderRegistrationsClosedView = () => {
    return (
      <div className="flex flex-col items-center w-[90%]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="w-[80%] max-w-[393px]"
        />
        <h1 className="text-center text-[#323f4b] text-[24px] font-[600] leading-[1.2] m-0 mt-[32px]">
          Registrations Are Closed Now!
        </h1>
        <p className="text-center text-[#475569] text-[18px] leading-[1.7] w-[60%] m-0 mt-[16px]">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    );
  };

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registractionStatus.yetToRegister:
        return renderYetToRegisterView();
      case registractionStatus.registered:
        return renderRegisteredView();
      case registractionStatus.registrationsClosed:
        return renderRegistrationsClosedView();
      default:
        return renderNoActiveEventView();
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#ffffff] w-[40%] h-screen">
      {renderActiveEventRegistrationDetails()};
    </div>
  );
};

export default ActiveEventRegistrationDetails;

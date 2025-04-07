const NotFound = () => (
  <div className="grow-1 flex justify-center items-center sm:self-start sm:mt-[60px]">
    <div className="grow-1 flex flex-col justify-center items-center w-[90%] max-w-[1110px] sm:mt-[60px] sm:max-w-[458px]">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="w-[328px] md:w-[475px]"
      />
      <h1 className="text-[#334155] font-Roboto font-[600] text-[16px] leading-[1.5] m-0 mt-[32px] md:text-[36px] md:font-[500] md:leading-[1.22]">
        Lost Your Way?
      </h1>
      <p className="text-[#64748b] font-['Roboto'] text-[16px] leading-[1.75] mt-4 text-left md:text-center md:text-[12px] md:leading-[1.33] md:w-[241px] md:mt-[6px]">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
);

export default NotFound;

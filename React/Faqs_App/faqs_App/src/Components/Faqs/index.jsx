import FaqItem from "../FaqItem";

const Faqs = (props) => {
  const { faqsList } = props;
  return (
    <div className="flex justify-center items-center bg-[#f1f5f8] min-h-screen w-screen">
      <div className="flex flex-col items-center justify-center w-[87%] bg-[#ffffff] rounded-[16px] pt-[32px] px-[12px] pb-[32px] max-w-[550px] md:w-[90%] md:mx-w-[1140px] md:p-[32px]">
        <h1 className="text-[#cb8805] font-roboto text-[32px] font-[700] md:text-[64px]">
          FAQs
        </h1>
        <ul className="w-[100%] list-none p-0 md:w-[90%] lg:w-[80%]">
          {faqsList.map((eachFaq) => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;

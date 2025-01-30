const NoteItem = (props) => {
  const { noteDetails } = props;

  const { title, noteText } = noteDetails;

  return (
    <li className="flex flex-col w-[100%] border border-[#cbd5e1] rounded-[8px] mb-[16px] px-[24px] py-[16px] md:w-[31%] md:min-w-[257px] mt-0 mx-2 mb-6">
      <h1 className="text-[#334155] text-[20px] font-[500] m-0 leading-[1.33]">
        {title}
      </h1>
      <p className="text-[#334155] text-[14px] m-0 mt-[16px] leading-[24px]">
        {noteText}
      </p>
    </li>
  );
};

export default NoteItem;

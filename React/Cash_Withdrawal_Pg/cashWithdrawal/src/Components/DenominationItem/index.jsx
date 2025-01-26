const DenominationItem = (props) => {
  const { denominationDetails, deductAmountBalance } = props;
  const { id, value } = denominationDetails;

  const onDeductAmount = () => {
    deductAmountBalance(value);
  };

  return (
    <li className="list-none w-[48%] mb-[10px] mr-[4px]">
      <button
        type="button"
        className="bg-[#382f5a] text-[#d4d2db] font-roboto text-[16px] font-medium w-full rounded-[4px] border border-[#c4c4c4] py-[4px] cursor-pointer outline-none md:text-[24px]"
        onClick={onDeductAmount}>
        {value}
      </button>
    </li>
  );
};

export default DenominationItem;

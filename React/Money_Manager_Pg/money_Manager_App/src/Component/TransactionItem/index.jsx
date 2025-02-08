const TransactionItem = (props) => {
  const { transactionDetails, deleteTransaction } = props;
  const { id, title, amount, type } = transactionDetails;

  const ondeleteTransaction = () => {
    deleteTransaction(id);
  };

  return (
    <li className="flex justify-between list-none border border-b-[#cbd5e1] border-r-[#cbd5e1] border-l-[#cbd5e1] pl-[10px] pr-[10px] md:px-[24px]">
      <p className="text-[#475569] font-roboto text-[12px] w-[30%] md:text-[14px]">
        {title}
      </p>
      <p className="text-[#475569] font-roboto text-[12px] w-[30%] md:text-[14px]">
        Rs {amount}
      </p>
      <p className="text-[#475569] font-roboto text-[12px] w-[30%] md:text-[14px]">
        {type}
      </p>
      <div className="flex w-[10%]">
        <button
          type="button"
          onClick={ondeleteTransaction}
          data-testid="delete"
          className="bg-transparent cursor-pointer border-none outline-none">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="bg-transparent w-[20px] h-[20px] self-center border-none outline-none"
          />
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;

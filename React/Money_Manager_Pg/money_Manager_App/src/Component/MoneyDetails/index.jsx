const MoneyDetails = (props) => {
  const { balanceAmount, incomeAmount, expensesAmount } = props;

  return (
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between w-[100%] mb-[32px] mt-[32px]">
      <div className="flex justify-start items-center bg-[#ecfccb] w-[100%] md:w-[30%] md:mr-0 border border-[#84cc16] rounded-[16px] mb-[16px]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="w-[64px] h-[64px] m-[24px] "
        />
        <div>
          <p className="text-[#475569] text-[12px] font-roboto leading-[1.7] m-0 mb-[8px] md:text-[14px]">
            Your Balance
          </p>
          <p
            className="text-[#475569] text-[18px] font-roboto leading-[1.3] m-0 md:text-[24px]"
            data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center bg-[#cffafe] w-[100%] md:w-[30%] md:mr-0 border border-[#06b6d4] rounded-[16px] mb-[16px]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="w-[64px] h-[64px] m-[24px] "
        />
        <div>
          <p className="text-[#475569] text-[12px] font-roboto leading-[1.7] m-0 mb-[8px] md:text-[14px]">
            Your Income
          </p>
          <p
            className="text-[#475569] text-[18px] font-roboto leading-[1.3] m-0 md:text-[24px]"
            data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="flex justify-start items-center bg-[#ede9fe] w-[100%] md:w-[30%] md:mr-0 border border-[#7c3aed] rounded-[16px] mb-[16px]">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="w-[64px] h-[64px] m-[24px] "
        />
        <div>
          <p className="text-[#475569] text-[12px] font-roboto leading-[1.7] m-0 mb-[8px] md:text-[14px]">
            Your Expenses
          </p>
          <p
            className="text-[#475569] text-[18px] font-roboto leading-[1.3] m-0 md:text-[24px]"
            data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoneyDetails;

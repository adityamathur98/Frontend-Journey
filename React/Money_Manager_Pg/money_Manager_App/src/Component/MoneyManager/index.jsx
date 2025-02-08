import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import MoneyDetails from "../MoneyDetails";
import TransactionItem from "../TransactionItem";

const transactionTypeOptions = [
  {
    optionId: "INCOME",
    displayText: "Income",
  },
  {
    optionId: "EXPENSES",
    displayText: "Expenses",
  },
];

const MoneyManager = () => {
  const [amountInput, setAmountInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [transactionList, setTransactionList] = useState([]);
  const [activeOptionId, setActiveOptionId] = useState(
    transactionTypeOptions[0].optionId
  );

  const getExpenses = () => {
    let expensesAmount = 0;

    transactionList.forEach((eachTransaction) =>
      eachTransaction.type === transactionTypeOptions[1].displayText
        ? (expensesAmount += eachTransaction.amount)
        : 0
    );

    return expensesAmount;
  };

  const getIncome = () => {
    let incomeAmount = 0;
    transactionList.forEach((eachTransaction) =>
      eachTransaction.type === transactionTypeOptions[0].displayText
        ? (incomeAmount += eachTransaction.amount)
        : 0
    );

    return incomeAmount;
  };

  const getBalance = () => {
    let balanceAmount = 0;
    let incomeAmount = 0;
    let expensesAmount = 0;

    transactionList.forEach((eachTransaction) =>
      eachTransaction.type === transactionTypeOptions[0].displayText
        ? (incomeAmount += eachTransaction.amount)
        : (expensesAmount += eachTransaction.amount)
    );
    balanceAmount = incomeAmount - expensesAmount;

    return balanceAmount;
  };

  const onAddTransaction = (e) => {
    e.preventDefault();
    const typeOption = transactionTypeOptions.find(
      (eachOption) => eachOption.optionId === activeOptionId
    );
    const { displayText } = typeOption;

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    };

    setTransactionList((prevState) => [...prevState, newTransaction]);
    setTitleInput("");
    setAmountInput("");
    setActiveOptionId(transactionTypeOptions[0].optionId);
  };

  const onChangeTitle = (e) => {
    setTitleInput(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmountInput(e.target.value);
  };

  const onChangeOptionId = (e) => {
    setActiveOptionId(e.target.value);
  };

  const deleteTransaction = (id) => {
    setTransactionList(
      transactionList.filter((eachTransaction) => eachTransaction.id !== id)
    );
  };

  const balanceAmount = getBalance();
  const incomeAmount = getIncome();
  const expensesAmount = getExpenses();

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-[80%] max-w-[550px] md:max-w-[1140px]">
        <div className="bg-[url('https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png')] flex flex-col justify-center items-center text-center bg-cover h-[172px] rounded-[16px] mt-[64px] md:items-start md:p-[48px]">
          <h1 className="text-[#475569] font-roboto text-[24px] font-[500] mb-[16px] md:text-[30px]">
            Hi, Richard
          </h1>
          <p className="text-[#475569] font-roboto text-[14px] m-0 md:text-[18px]">
            Welcome back to your
            <span className="text-[#0b69ff] font-[500]"> Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="flex flex-col justify-between w-[100%] mb-[24px] md:flex-row">
          <form
            onSubmit={onAddTransaction}
            className="flex flex-col justify-between items-start h-[424px] w-[100%] border border-[#cbd5e1] rounded-[12px] pt-[12px] pr-[24px] pl-[24px] pb-[32px] md:w-[40%] md:pr-[43px] md:pl-[48px]">
            <h1 className="text-[#475569] font-roboto text-[16px] font-[500] leading-[1.6] md:text-[20px]">
              Add Transaction
            </h1>
            <label
              htmlFor="title"
              className="text-[#7e858e] font-roboto font-[500] text-[12px] leading-[1.4] mb-0">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={onChangeTitle}
              className="text-[#1e293b] bg-[#ffffff] font-roboto border border-[#d7dfe9] rounded-[2px] w-[100%] h-[40px] outline-none p-[10px] mb-[10px] min-w-[157px]"
            />
            <label
              htmlFor="amount"
              className="text-[#7e858e] font-roboto font-[500] text-[12px] leading-[1.4] mb-0">
              AMOUNT
            </label>
            <input
              type="number"
              id="amount"
              value={amountInput}
              onChange={onChangeAmount}
              className="text-[#1e293b] bg-[#ffffff] font-roboto border border-[#d7dfe9] rounded-[2px] w-[100%] h-[40px] outline-none p-[10px] mb-[10px] min-w-[157px]"
            />
            <label
              htmlFor="type"
              className="text-[#7e858e] font-roboto font-[500] text-[12px] leading-[1.4] mb-0">
              TYPE
            </label>
            <select
              id="type"
              value={activeOptionId}
              onChange={onChangeOptionId}
              className="text-[#1e293b] bg-[#ffffff] font-roboto border border-[#d7dfe9] rounded-[2px] w-[100%] h-[40px] outline-none p-[10px] mb-[10px] min-w-[157px]">
              {transactionTypeOptions.map((eachOption) => (
                <option key={eachOption.optionId} value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button
              type="submit"
              class="bg-[#0b69ff] text-white font-roboto text-[14px] font-semibold min-w-[25px] rounded-md border-none px-6 py-3 outline-none cursor-pointer mb-2.5">
              Add
            </button>
          </form>
          <div className="w-[100%] min-h-[326px] border border-[#cbd5e1] rounded-[12px] px-[24px] py-[12px] mt-[32px] md:w-[55%] md:min-h-[424px] md:pt-[24px] md:pl-[28px] md:pr-[41px] md:pb-[40px] md:m-0 md:ml-[32px]">
            <h1 class="text-[#475569] font-roboto text-[16px] font-medium leading-[1.6] md:text-[20px]">
              History
            </h1>
            <div className="h-[100%] rounded-[8px]">
              <ul className="pl-0 m-0">
                <li className="flex justify-start items-center h-[48px] list-none border border-[#cbd5e1] px-[10px] md:px-[24px]">
                  <p className="text-[#334155] font-roboto text-[12px] font-[500] w-[30%] rounded-r-none md:text-[16px]">
                    Title
                  </p>
                  <p className="text-[#334155] font-roboto text-[12px] font-[500] w-[30%] rounded-r-none md:text-[16px]">
                    Amount
                  </p>
                  <p className="text-[#334155] font-roboto text-[12px] font-[500] w-[30%] rounded-r-none md:text-[16px]">
                    Type
                  </p>
                </li>
                {transactionList.map((eachTransaction) => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyManager;

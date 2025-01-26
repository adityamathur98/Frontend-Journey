import React, { useState } from "react";

import TodoItem from "../TodoItem";

import "./index.css";

const initialTodosList = [
  {
    id: 1,
    title: "Book the ticket for today evening",
  },
  {
    id: 2,
    title: "Rent the movie for tomorrow movie night",
  },
  {
    id: 3,
    title: "Confirm the slot for the yoga session tomorrow morning",
  },
  {
    id: 4,
    title: "Drop the parcel at Bloomingdale",
  },
  {
    id: 5,
    title: "Order fruits on Big Basket",
  },
  {
    id: 6,
    title: "Fix the production issue",
  },
  {
    id: 7,
    title: "Confirm my slot for Saturday Night",
  },
  {
    id: 8,
    title: "Get essentials for Sunday car wash",
  },
];

const SimpleTodo = () => {
  const [todoList, setTodoList] = useState(initialTodosList);

  const deleteTodo = (id) => {
    const updateTodosList = todoList.filter((eachTodo) => eachTodo.id !== id);

    setTodoList(updateTodosList);
  };

  return (
    <div className="bg-[#ffc2a0] h-screen flex">
      <div className="m-auto bg-[#ffffff] w-[90%] max-w-[1110px] rounded-[16px] p-[24px] md:p-[48px] flex flex-col items-center">
        <h1 className="text-[#ff8542] text-[24px] font-[700] mt-[12px] mb-[16px] md:text-[48px] md:mt-[32px] md:mb-[48px]">
          Simple Todos
        </h1>
        <ul className="pl-0">
          {todoList.map((eachTodo) => (
            <TodoItem
              key={eachTodo.id}
              todo={eachTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SimpleTodo;

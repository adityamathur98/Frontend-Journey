import React, { useState } from "react";

import CommentItem from "../CommentItem";

import { v4 as uuidv4 } from "uuid";

const initialContainerBackgroundClassNames = [
  "amber",
  "blue",
  "orange",
  "emerald",
  "teal",
  "red",
  "light-blue",
];

const CommentApp = () => {
  // const initialContainerBackgroundClassNames = ``
  const [nameInput, setNameInput] = useState("");
  const [commentInput, setCommentInput] = useState("");
  const [commentList, setCommentList] = useState([]);

  const onAddComment = (e) => {
    e.preventDefault();
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      isLiked: false,
      date: new Date(),
    };

    setCommentList((prevState) => [...prevState, newComment]);
    setNameInput("");
    setCommentInput("");
  };

  const onChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const onChangeComment = (e) => {
    setCommentInput(e.target.value);
  };

  const toggleIsLiked = (id) => {
    setCommentList((prevState) =>
      prevState.map((eachComment) =>
        id === eachComment.id
          ? { ...eachComment, isLiked: !eachComment.isLiked }
          : eachComment
      )
    );
  };

  const onClickDelete = (id) => {
    setCommentList((prevState) =>
      prevState.filter((eachComment) => eachComment.id !== id)
    );
  };

  return (
    <div className="flex justify-center mt-[48px] md:mt-[96px]">
      <div className="flex flex-col w-[90%] max-w-[550px] md:w-[80%] md:max-w-[1140px]">
        <h1 className="text-[#1e293b] font-roboto text-[48px] mb-[12px] md:text-[56px] md:m-0 md:mb-[24px]">
          Comments
        </h1>
        <div className="flex flex-col justify-between items-center md:flex-row">
          <form
            onSubmit={onAddComment}
            className="flex flex-col w-[100%] order-1 md:w-[28%] md:min-w-[300px] md:order-0">
            <p className="text-[#475569] font-roboto text-[16px] font-[500] mt-[24px] ">
              Say something about 4.0 Technologies
            </p>
            <input
              type="text"
              value={nameInput}
              placeholder="Your Name"
              onChange={onChangeName}
              className="font-roboto text-[16px] h-[40px] border border-[#cbd2d9] rounded-[4px] mb-[12px] pl-[16px] pt-[8px] pb-[8px] outline-none"
            />
            <textarea
              type="text"
              rows="6"
              value={commentInput}
              onChange={onChangeComment}
              placeholder="Your Comment"
              className="font-roboto text-[16px] border border-[#cbd2d9] rounded-md px-4 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-[#0284c7] text-white text-[14px] font-roboto rounded-md border-none px-4 py-2 mt-4 min-w-[60px] self-start outline-none cursor-pointer">
              Add Comment
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr className="border border-[#dee0e3] w-[100%] mt-[16px]" />
        <p className="text-[#475569] font-roboto text-[14px] font-[500] ml-[8px]">
          <span className="text-center text-white bg-[#0284c7] text-[12px] font-roboto rounded-md px-2 py-1 mr-1">
            {commentList.length}
          </span>
          Comments
        </p>
        <ul className="pl-0 mt-0">
          {commentList.map((eachComment) => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              toggleIsLiked={toggleIsLiked}
              onClickDelete={onClickDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentApp;

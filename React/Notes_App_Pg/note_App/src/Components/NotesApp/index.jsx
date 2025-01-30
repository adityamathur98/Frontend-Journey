import React, { useState } from "react";

import NoteItem from "../NoteItem";

import { v4 as uuidv4 } from "uuid";

const NotesApp = () => {
  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [notesList, setNoteList] = useState([]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeNote = (e) => {
    setNoteText(e.target.value);
  };

  const onAddNote = (e) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title,
      noteText,
    };

    setNoteList((prevList) => [...prevList, newNote]);
    setTitle("");
    setNoteText("");
  };

  const renderEmptyNotesView = () => {
    return (
      <div className="flex flex-col justify-center items-center flex-grow">
        <img
          src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          className="w-[80px] md:w-[141px]"
          alt="notes empty"
        />
        <h1 className="text-[#475569] text-[20px] font-[500] mt-[24px] mb-[4px] leading-[1.5] md:text-[24px]">
          No Notes Yet
        </h1>
        <p className="text-[#475569] font-roboto text-sm mt-1 leading-[1.33] md:text-base md:leading-[1.5]">
          Notes you add will appear here
        </p>
      </div>
    );
  };

  const renderNotes = () => {
    return (
      <ul className="flex flex-wrap mt-[24px] pl-0 list-none md:mt-[32px]">
        {notesList.map((eachNote) => (
          <NoteItem key={eachNote.id} noteDetails={eachNote} />
        ))}
      </ul>
    );
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col w-[90%] mt-[48px] mb-[48px] md:w-[80%] md:max-w-[1200px]">
        <h1 className="text-center text-[#4c63b6] text-[24px] font-[400] m-0 leading-[1.33] md:text-[48px] md:leading-[1.5]">
          Notes
        </h1>
        <form
          onSubmit={onAddNote}
          className="flex flex-col border border-[#d8d8d8] rounded-[4px] mt-[32px] p-[16px] shadow-lg md:mt-[64px] md:p-[24px]">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={onChangeTitle}
            className="text-[#475569] font-[500] text-[16px] border-none outline-none leading-[1.33]"
          />
          <textarea
            type="text"
            value={noteText}
            placeholder="Take a Note..."
            onChange={onChangeNote}
            rows={3}
            className="text-[#1e293b] text-[16px] border-none mt-[32px] outline-none leading-[1.5]"
          />
          <button
            type="submit"
            className="text-white bg-[#4c63b6] font-roboto text-[16px] border-none rounded-[4px] mt-[8px] mr-[12px] mb-[8px] px-[24px] py-[12px] self-end cursor-pointer outline-none leading-[1.33] sm:mr-[24px]">
            Add
          </button>
        </form>
        {notesList.length === 0 ? renderEmptyNotesView() : renderNotes()};
      </div>
    </div>
  );
};

export default NotesApp;

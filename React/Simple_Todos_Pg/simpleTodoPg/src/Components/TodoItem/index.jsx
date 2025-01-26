import "./index.css";

const TodoItem = (props) => {
  const { todo, deleteTodo } = props;
  const { id, title } = todo;

  const onDelete = () => {
    deleteTodo(id);
  };

  return (
    <li className="flex justify-between items-center list-none py-2 md:py-4 border-b">
      <p className="text-[#000000] text-[16px] md:text-[24px]">{title}</p>
      <button
        className="delete-btn bg-white text-[#ff0b37] font-roboto text-[12px] rounded-[8px] border border-[#ff0b37] px-[8px] py-[4px] outline-none cursor-pointer md:text-[18px] md:px-[16px] md:py-[8px] md:ml-[32px] hover:bg-[#ff0b37] hover:text-white"
        onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

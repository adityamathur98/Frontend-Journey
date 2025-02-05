import { formatDistanceToNow } from "date-fns";

const CommentItem = (props) => {
  const { commentDetails, toggleIsLiked, onClickDelete } = props;
  const { id, name, comment, isLiked, date } = commentDetails;

  const intialLetter = name ? name[0].toUpperCase() : "";
  const postedTime = formatDistanceToNow(date);
  const likeImageUrl = isLiked
    ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
    : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png";

  const likeTextClassName = isLiked
    ? "bg-transparent text-[#7e858e] font-roboto text-sm font-medium border-none outline-none cursor-pointer"
    : "bg-transparent text-[#0ea5e9] font-roboto text-sm font-medium border-none outline-none cursor-pointer";

  const onClickToggle = () => {
    toggleIsLiked(id);
  };

  const onDelectComment = () => {
    onClickDelete(id);
  };

  return (
    <li className="list-none">
      <div className="flex">
        <div className="flex justify-center items-center w-8 h-8 rounded-full mt-[18px] mr-2 flex-shrink-0 text-[#f59e0b]">
          <p>{intialLetter}</p>
        </div>
        <div>
          <div className="flex items-center mt-[20px] mb-[12px]">
            <p className="text-[#334155] text-[16px] font-[500] mt-0 mb-0">
              {name}
            </p>
            <p className="text-[#94a3b8] text-[12px] ml-[18px] mt-0 mb-0">
              {postedTime}
            </p>
          </div>
          <p className="text-[#64748b] text-[14px]">{comment}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={likeImageUrl}
            alt="like"
            className="h-[20px] w-[20px] mr-[8px]"
          />
          <button
            type="button"
            onClick={onClickToggle}
            className={likeTextClassName}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="bg-transparent text-[#7e858e] font-roboto text-sm font-medium border-none outline-none cursor-pointer"
          onClick={onDelectComment}
          data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="w-[20px] h-[20px]"
          />
        </button>
      </div>
    </li>
  );
};

export default CommentItem;

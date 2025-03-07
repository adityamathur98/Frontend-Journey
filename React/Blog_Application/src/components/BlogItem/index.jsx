import { Link } from "react-router-dom";

const BlogItem = (props) => {
  const { blogData } = props;
  const { id, imageUrl, topic, title, avatarUrl, author } = blogData;
  return (
    <Link to={`/blogs/${id}`}>
      <div className="flex flex-col m-[15px] sm:flex-row sm:w-[660px] sm:h-[170px] sm:m-[15px] border border-[#8d8d8d] rounded-[12px] p-3 w-[350px]">
        <img
          className="w-[100%] border border-transparent rounded-[5px] h-[140px] sm:w-[40%] sm:mr-[15px]"
          src={imageUrl}
          alt={`item${id}`}
        />

        <div className="w-[100%] sm:w-[60%]">
          <p className="text-[#8e8e8e] text-[14px]">{topic}</p>

          <p className="text-[18px]">{title}</p>
          <div className="flex justify-start items-center">
            <img
              className="h-[30px] w-[30px] mr-[10px] rounded-[50%]"
              src={avatarUrl}
              alt={`avatar${id}`}
            />
            <p className="text-[#8e8e8e] text-[14px]">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;

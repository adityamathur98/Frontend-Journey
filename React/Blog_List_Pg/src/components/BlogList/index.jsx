import BlogItem from "../BlogItem";

const BlogList = (props) => {
  const { blogsList } = props;
  return (
    <ul className="w-[70%] m-auto pl-0 max-lg:w-[95%]">
      {blogsList.map((eachBlog) => (
        <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  );
};

export default BlogList;

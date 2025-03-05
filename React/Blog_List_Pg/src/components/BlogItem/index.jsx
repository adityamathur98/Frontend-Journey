const BlogItem = (props) => {
  const { blogDetails } = props;
  const { title, description, publishedDate } = blogDetails;

  return (
    <li className="w-[100%] border border-[#e7e5ea] list-none p-[24px] mb-[18px]">
      <div className="flex items-center justify-between mb-[18px]">
        <h2 className="font-normal font-bold text-[18px] text-[#12022f] ">
          {title}
        </h2>
        <p className="font-normal font-normal leading-[26px] text-[#9aa5b1]">
          {publishedDate}
        </p>
      </div>
      <p className="font-normal text-[16px] leading-[26px] text-[#9aa5b1]">
        {description}
      </p>
    </li>
  );
};

export default BlogItem;

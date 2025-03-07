import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const blogData = {
  title: "Blog Name",
  imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-3-img.png",
  avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
  author: "Author Name",
  content:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

const BlogItemDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBlogData() {
    try {
      const response = await axios.get(`https://apis.ccbp.in/blogs/${id}`);
      const data = response.data;
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      };
      setBlogData(updatedData);
      setIsLoading(false);
    } catch (error) {
      console.log("Eroor Fetching Data", error);
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []);

  const renderBlogItemDetails = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;
    return (
      <div className="w-[100%] sm:w-[660px]">
        <h2 className="text-[14px] text-center font-bold sm:text-[28px]">
          {title}
        </h2>

        <div className="flex justify-start items-center">
          <img
            className="h-[30px] w-[30px] mr-[10px] rounded-[50%]"
            src={avatarUrl}
            alt={author}
          />
          <p className="text-[#8e8e8e] text-[14px]">{author}</p>
        </div>

        <img
          className="w-[100%] h-[300px] rounded-[8px] object-cover sm:w-[600px]"
          src={imageUrl}
          alt={title}
        />
        <p className="mt-[15px] leading-[24px] text-darkslategrey">{content}</p>
      </div>
    );
  };

  return (
    <div className="flex flex-col mt-[20px] p-[15px] sm:items-center sm:justify-center">
      {isLoading ? (
        <ClipLoader color="#367e7f" size={60} loading={true} />
      ) : (
        renderBlogItemDetails()
      )}
    </div>
  );
};

export default BlogItemDetails;

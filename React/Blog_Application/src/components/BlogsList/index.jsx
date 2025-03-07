import React, { useEffect, useState } from "react";
import BlogItem from "../BlogItem";
import axios from "axios";

import { ClipLoader } from "react-spinners";

//Dummy Data
// const blogsData = [
//   {
//     id: 1,
//     title: "Blog 1",
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-1-img.png",
//     avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
//     author: "Author Name",
//     topic: "React.js",
//   },
//   {
//     id: 2,
//     title: "Blog 2",
//     imageUrl: "https://assets.ccbp.in/frontend/react-js/placeholder-2-img.png",
//     avatarUrl: "https://assets.ccbp.in/frontend/react-js/avatar-img.png",
//     author: "Author Name",
//     topic: "React.js",
//   },
// ];

const BlogsList = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBlogs() {
    try {
      const response = await axios.get("https://apis.ccbp.in/blogs");
      const data = response.data;
      const updateData = data.map((eachItem) => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }));
      setBlogList(updateData);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching Blogs: ", error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col mt-[40px]">
      {isLoading ? (
        <ClipLoader color="#36d7b7" size={60} loading={true} />
      ) : (
        blogList.map((item) => <BlogItem blogData={item} key={item.id} />)
      )}
    </div>
  );
};

export default BlogsList;

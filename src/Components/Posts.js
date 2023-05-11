import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPostUserId = Math.max(...posts.map((post) => post.userId));
    const newPostId = Math.max(...posts.map((post) => post.id));
    console.log(newPostUserId);
    console.log(newPostId);
    var newPost = {
      userId: newPostUserId + 1,
      id: newPostId + 1,
      title: "New Post",
      body: "New Post Data",
    };
    axios
      .post("http://localhost:5000/posts", newPost)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (e, postData) => {
    var editedPost = {
      userId: postData.userId,
      id: postData.userId,
      title: "Updated Post",
      body: "Updated Post Data",
    };
    axios
      .put(`http://localhost:5000/posts/${postData.id}`, editedPost)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (e, postId) => {
    axios
      .delete(`http://localhost:5000/posts/${postId}`)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(posts);

  return (
    <>
      <div>CRUD Operations using JSON Server</div>
      <button
        onClick={(e) => {
          handleAddPost(e);
        }}
      >
        Add Post
      </button>
      <div>
        <ul>
          {posts.map((post, index) => (
            <li style={{ listStyle: "none" }} key={index}>
              {post.id}. {post.title}
              <button
                onClick={(e) => {
                  handleEdit(e, post);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  handleDelete(e, post.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;

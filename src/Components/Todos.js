import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    //   const newPostUserId = Math.max(...posts.map((post) => post.userId));
    //   const newPostId = Math.max(...posts.map((post) => post.id));
    //   console.log(newPostUserId);
    //   console.log(newPostId);
    var newTodo = {
      id: todos.length + 1,
      title: `Item ${todos.length + 1}`,
    };
    axios
      .post("http://localhost:5000/todos", newTodo)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (e, todoData) => {
    var editedTodo = {
      id: todoData.id,
      title: `Updated Item ${todoData.id}`,
    };
    axios
      .put(`http://localhost:5000/todos/${todoData.id}`, editedTodo)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (e, todoId) => {
    axios
      .delete(`http://localhost:5000/todos/${todoId}`)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });
  };
//   console.log(posts);

  return (
    <>
      <div>CRUD Operations using JSON Server</div>
      <button
        onClick={(e) => {
          handleAddTodo(e);
        }}
      >
        Add Todo
      </button>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li style={{ listStyle: "none" }} key={index}>
              {todo.id}. {todo.title}
              <button
                onClick={(e) => {
                  handleEdit(e, todo);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  handleDelete(e, todo.id);
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

export default Todos;

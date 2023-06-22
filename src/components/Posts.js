import { IconButton } from "@mui/material";
import { Edit, Delete, Check, Clear } from "@mui/icons-material";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "./Editor";
import "./Posts.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Posts = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newPostStatus, setNewPostStatus] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  console.log(data);
  localStorage.setItem("posts", JSON.stringify(data));
  const storedData = localStorage.getItem("posts");
  const parsedData = JSON.parse(storedData);

  const apiCall = async () => {
    try {
      axios.get(baseURL).then((res) => {
        setData(res.data);
      });
    } catch (error) {
      console.error("Error al obtener datos", error);
    }
  };

  const handleDelete = (postId) => {
    const updatedPosts = data.filter((post) => post.id !== postId);
    setData(updatedPosts);

    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const updateData = (newData) => {
    setData(newData);
  };

  const updateModalStatus = (newStatus) => {
    setShowModal(newStatus);
  };

  const openModal = (postId, postTitle, postBody) => {
    setShowModal(true);
    setPostId(postId);
    setTitle(postTitle);
    setBody(postBody);
    document.body.style.overflow = "hidden";
  };

  const changeNewPostStatus = () => {
    setNewPostStatus(!newPostStatus);
  };

  const makingNewPost = () => {
    const newPost = {
      userId: 1,
      id: parsedData.length + 1,
      title: newPostTitle,
      body: newPostBody,
    };
    if (newPostTitle || newPostBody !== "") {
      const updateStorage = setData([newPost, ...data]);
      localStorage.setItem("posts", JSON.stringify(updateStorage));
    } else {
      console.log("Error");
    }
    setNewPostTitle("");
    setNewPostBody("");
  };

  const publishNewPost = () => {
    makingNewPost();
    setNewPostStatus(false);
  };

  useEffect(() => {
    apiCall();

    const storedPosts = localStorage.getItem("posts");
    setData(JSON.parse(storedPosts));
  }, []);

  if (data === null) {
    return <h1>Cargando Datos...</h1>;
  }

  return (
    <div>
      {showModal && (
        <Modal
          editId={postId}
          editTitle={title}
          editBody={body}
          updateData={updateData}
          updateModalStatus={updateModalStatus}
        />
      )}
      <h1 className="page-title">Post-IT</h1>
      <div className="new-publication-button-container">
        <button
          className="new-publication-button"
          onClick={changeNewPostStatus}
        >
          Publica Aquí
        </button>
      </div>
      {newPostStatus && (
        <div className="new-publication-container posts-container">
          <div className="new-publication-title">
            <p>Título</p>
            <input onChange={(e) => setNewPostTitle(e.target.value)}></input>
          </div>
          <div className="new-publication-body">
            <p>Contenido</p>
            <textarea
              onChange={(e) => setNewPostBody(e.target.value)}
            ></textarea>
          </div>
          <div>
            <IconButton
              onClick={() => publishNewPost()}
              style={{
                backgroundColor: "#38EB24",
                color: "#000000",
                marginTop: "15px",
                marginLeft: "10px",
                marginRigth: "10px",
              }}
            >
              <Check />
            </IconButton>
            <IconButton
              onClick={() => setNewPostStatus(false)}
              style={{
                backgroundColor: "#ff605a",
                color: "#000000",
                marginTop: "15px",
                marginLeft: "10px",
                marginRigth: "10px",
              }}
            >
              <Clear />
            </IconButton>
          </div>
        </div>
      )}
      <div className="posts-container">
        <ul>
          {parsedData.map((post) => {
            return (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <pre>{post.body}</pre>
                <div className="action-buttons-container">
                  <IconButton
                    onClick={() => openModal(post.id, post.title, post.body)}
                    style={{
                      backgroundColor: "#2596be",
                      color: "#FFFFFF",
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(post.id)}
                    style={{ backgroundColor: "#ff605a", color: "#FFFFFF" }}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Posts;

import { useState } from "react";
import "./Editor.css";
import { IconButton } from "@mui/material";
import { Check } from "@mui/icons-material";

const Modal = ({
  editId,
  editTitle,
  editBody,
  updateData,
  updateModalStatus,
}) => {
  const [titleInput, setTittleInput] = useState(editTitle);
  const [bodyInput, setBodyInput] = useState(editBody);

  //Poniendo la data en local storage
  const storedData = localStorage.getItem("posts");
  const parsedData = JSON.parse(storedData);

  const savingEdit = () => {
    const updatedPost = parsedData.map((post) => {
      if (post.id === editId) {
        return {
          ...post,
          title: titleInput,
          body: bodyInput,
        };
      }
      return post;
    });
    localStorage.setItem("posts", JSON.stringify(updatedPost));
    updateData(updatedPost);
    updateModalStatus(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="content-container">
          <h2 className="editor-title">Editar Post</h2>
          <div className="title-container">
            <p>Título</p>
            <input
              defaultValue={editTitle}
              onChange={(event) => setTittleInput(event.target.value)}
            ></input>
          </div>
          <div className="body-container">
            <p>Contenido</p>
            <textarea
              defaultValue={editBody}
              onChange={(event) => setBodyInput(event.target.value)}
              rows="2"
              cols="20"
              wrap="hard"
            ></textarea>
          </div>
          <IconButton
            onClick={() => savingEdit()}
            style={{
              backgroundColor: "#38EB24",
              color: "#000000",
              marginTop: "20px",
            }}
            className="save-button"
          >
            <Check />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;

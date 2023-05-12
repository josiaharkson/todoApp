import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markComplete, delTodo, onUpdate }) => {
  const { id, title, completed } = todo;

  const [editMode, seteditMode] = useState(false);
  const [_title, settitle] = useState("");

  useEffect(() => {
    if (title) settitle(title);
  }, [title]);

  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        {!editMode ? (
          <>
            {" "}
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={() => markComplete(id)}
            />{" "}
            {title}
            <button onClick={() => delTodo(id)} style={btnStyle}>
              DELETE
            </button>{" "}
            <button onClick={() => seteditMode((x) => !x)} style={edbtnStyle}>
              EDIT
            </button>
          </>
        ) : (
          <>


<button onClick={() => {
              seteditMode(false);
              settitle(title);
            }} style={btnStyle}>
              CANCEL UPDATE
            </button>
            <input
              type="TEXT"
              value={_title}
              onChange={(e) => settitle(e.target.value)}
            />{" "}
            <button onClick={() => onUpdate(_title, id, ()=> seteditMode(false))} style={edbtnStyle}  >
              UPDATE
            </button>

        
          </>
        )}
      </p>
    </div>
  );
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const updtnStyle = {
  background: "brown",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "10%",
  cursor: "pointer",
  float: "right",
  marginRight: 10,
};

const edbtnStyle = {
  background: "green",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "10%",
  cursor: "pointer",
  float: "right",
  marginRight: 10,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "10%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;

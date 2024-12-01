import React from "react";

interface ActionButtonProps {
  onClick: () => void;
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, text }) => (
  <button
    onClick={onClick}
    style={{
      marginTop: "30px",
      padding: "6px",
      width: "15%",
      cursor: "pointer",
    }}
  >
    {text}
  </button>
);

export default ActionButton;

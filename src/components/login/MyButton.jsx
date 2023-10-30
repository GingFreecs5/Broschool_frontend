import React from "react";
import { useNavigate } from "react-router-dom";
function MyButton({
  flex,
  bgColor,
  color,
  paddingX,
  paddingY,
  textSize,
  text,
  fontWeight,
  className,
  link,
  maxWidth,
  minWidth,
  type,
}) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      className={className}
      type={type}
      onMouseEnter={(e) => (e.target.style.background = "#4d5fe3")}
      onMouseLeave={(e) => (e.target.style.background = bgColor)}
      style={{
        flex: flex,
        color: `${color}`,
        border: "none",
        fontWeight: fontWeight,
        backgroundColor: `${bgColor}`,
        fontSize: textSize,
        paddingLeft:paddingX,
        paddingRight : paddingX,
        paddingTop:paddingY,
        paddingBottom : paddingY,
        borderColor: "black",
        borderRadius: 30,
        maxWidth: maxWidth,
        minWidth:minWidth,
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;

import React from "react";
import { useNavigate } from "react-router-dom";
function MyButton({
  bgColor,
  color,
  paddingX,
  paddingY,
  textSize,
  text,
  fontWeight,
  className,
  link,
  type,
}) {
  const padding = `${paddingY} ${paddingX}`;
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      className={className}
      type={type}
      onMouseEnter={(e) => (e.target.style.background = "#4d5fe3")}
      onMouseLeave={(e) => (e.target.style.background = bgColor)}
      style={{
        color: `${color}`,
        border: "none",
        fontWeight: fontWeight,
        backgroundColor: `${bgColor}`,
        fontSize: textSize,
        padding: padding,
        borderColor: "black",
        borderRadius: 30,
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;

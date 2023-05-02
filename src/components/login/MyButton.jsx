import React from "react";

function MyButton({
  bgColor,
  color,
  paddingX,
  paddingY,
  textSize,
  text,
  className,
}) {
  const padding = `${paddingY} ${paddingX}`;
  console.log(padding);
  return (
    <button
      className={className}
      onMouseEnter={(e) => (e.target.style.background = "#4d5fe3")}
      onMouseLeave={(e) => (e.target.style.background = bgColor)}
      style={{
        color: `${color}`,
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

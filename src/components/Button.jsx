import React from "react";

function Button({ text, btnType = "primary", onClick }) {
  if (btnType === "secondary") {
    return (
      <button
        onClick={onClick}
        className="border border-rose-400 px-6 py-2 rounded-md text-gray-200 text-lg hover:bg-rose-400 transition-all"
      >
        {text}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-rose-400 px-8 py-3 rounded-md text-gray-900 text-lg font-semibold "
    >
      {text}
    </button>
  );
}

export default Button;

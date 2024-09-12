import React from "react";

function TextInput({ label, name, inputType, onChange, icon, required }) {
  return (
    <div className="w-[80%] flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        {icon && icon}
        <label className="text-xl">{label}</label>
        {required && <span className="text-red-500 text-xl">*</span>}
      </div>
      <input
        name={name}
        type={inputType}
        className="h-10 rounded-md outline-none text-gray-200 p-4 font-semibold bg-gray-700"
        onChange={onChange}
      />
    </div>
  );
}

export default TextInput;

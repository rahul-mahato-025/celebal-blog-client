import React, { useState } from "react";
import Register from "../components/Register";
import Login from "../components/Login";
import Button from "../components/Button";

function Auth({ setUser }) {
  const [ui, setUi] = useState(1);

  function updateUi(value) {
    setUi(value);
  }

  return (
    <div className="w-100 h-[90vh] bg-gray-900 flex flex-row items-center justify-center">
      <div className="w-[40%] h-[85%] bg-gray-800 rounded-md">
        {ui === 1 ? (
          <Register updateUi={updateUi} setUser={setUser} />
        ) : (
          <Login updateUi={updateUi} setUser={setUser} />
        )}
      </div>
    </div>
  );
}

export default Auth;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddPost from "./pages/AddPost";
import { useState } from "react";
import Auth from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

const toastOptions = {
  className: "",
  error: {
    // style: {
    //   color: "red",
    // },
  },
};

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addPost"
          element={
            <ProtectedRoute user={user}>
              <AddPost />
            </ProtectedRoute>
          }
        />
        <Route path="/auth" element={<Auth setUser={setUser} />} />
      </Routes>
      <Toaster position="top-center" toastOptions={toastOptions} />
    </>
  );
}

export default App;

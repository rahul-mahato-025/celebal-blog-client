import { Link } from "react-router-dom";
import Button from "./Button";
import { logout } from "../api/axios";
import toast from "react-hot-toast";

function Navbar({ user, setUser }) {
  async function handleLogout(e) {
    try {
      const response = await logout();
      setUser(null);
      toast.success(response.message);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <div className="px-10 w-[100vw] h-[10vh] bg-gray-900 flex flex-row items-center justify-between">
      <div>
        <h2 className="text-3xl">
          {user ? `Welcome, ${user.firstName}` : "Blog"}
        </h2>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <Link to="/">
          <h2 className="text-lg">Home</h2>
        </Link>
        <Link to="/addPost">
          <h2 className="text-lg">Add Post</h2>
        </Link>
        {user ? (
          <Button text="Logout" btnType="secondary" onClick={handleLogout} />
        ) : (
          <Link to="/auth">
            {" "}
            <Button text="Sign In" btnType="secondary" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;

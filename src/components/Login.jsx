import TextInput from "./TextInput";
import Button from "./Button";
import { useState } from "react";
import { login } from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import * as EmailValidator from "email-validator";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Login({ updateUi, setUser }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    if (!EmailValidator.validate(formData.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    if (!formData.password) {
      toast.error("Password is required");
      return;
    }

    try {
      const response = await login(formData);
      setUser(response.data);
      toast.success(response.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="bg-gray-800 w-[100%] h-[100%] flex flex-col px-10 gap-12 justify-center items-center rounded-md">
      <TextInput
        onChange={handleChange}
        name="email"
        label="Email"
        icon={<MdOutlineEmail size={24} />}
        required
      />
      <TextInput
        onChange={handleChange}
        name="password"
        label="Password"
        inputType="password"
        required
        icon={<RiLockPasswordLine size={24} />}
      />
      <div className="flex flex-col gap-3">
        <Button text="Log In" onClick={handleSubmit} />
        <p>
          New here ?{" "}
          <span
            onClick={() => updateUi(1)}
            className="font-bold hover:underline hover:cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
    </form>
  );
}

export default Login;

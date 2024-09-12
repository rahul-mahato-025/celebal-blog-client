import Button from "./Button";
import TextInput from "./TextInput";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import * as EmailValidator from "email-validator";
import { useState } from "react";
import { register } from "../api/axios";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Register({ updateUi, setUser }) {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.firstName) {
      toast.error("First Name is required");
      return;
    }

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
      const response = await register(formData);
      console.log(response);
      setUser(response.data);
      toast.success(response.message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="bg-gray-800 w-[100%] h-[100%] flex flex-col px-2 gap-8 justify-center items-center rounded-md">
      <div className="flex flex-row gap-6">
        <TextInput
          onChange={handleChange}
          name="firstName"
          label="First Name"
          icon={<CgProfile size={24} />}
          required
        />
        <TextInput
          onChange={handleChange}
          name="lastName"
          label="Last Name"
          icon={<CgProfile size={24} />}
        />
      </div>
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
        icon={<RiLockPasswordLine size={24} />}
        required
      />
      <div className="flex flex-col gap-3">
        <Button onClick={handleSubmit} text="Register" />
        <p>
          Already a user ?{" "}
          <span
            onClick={() => updateUi(2)}
            className="font-bold hover:underline hover:cursor-pointer"
          >
            Log In
          </span>
        </p>
      </div>
    </form>
  );
}

export default Register;

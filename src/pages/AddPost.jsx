import { useState } from "react";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import { addPost } from "../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [postData, setPostData] = useState({});
  const navigate = useNavigate();

  function handleInputChange(e) {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await addPost({ ...postData, user_id: 1 });
      toast.success("Post Created");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-100 h-[90vh] bg-gray-900 flex flex-row items-center justify-center">
      <form className="bg-gray-800 w-[40%] h-[80%] flex flex-col p-8 gap-12 justify-center items-center rounded-md">
        <TextInput
          label="Post Title"
          inputType="text"
          name="title"
          onChange={handleInputChange}
        />
        <div className="w-[80%] flex flex-col gap-4">
          <p className="text-xl">Post Content</p>
          <textarea
            name="content"
            className="w-100 h-[20vh] resize-none rounded-md outline-none text-gray-200 p-4 font-semibold bg-gray-700"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <Button text="Add" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default AddPost;

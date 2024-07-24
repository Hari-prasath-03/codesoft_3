/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/FireBaseConfig";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [image, setImage] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleFile = (e) => {
    const image = e.target.files[0];
    const imgUrl = URL.createObjectURL(image);
    setImage(imgUrl);
  };

  const postCollectionRef = collection(db, "posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postCollectionRef, {
        title,
        content,
        image,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        id: new Date(),
      });
      alert("post created");
      setTitle("");
      setContent("");
      setImage(null);
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Somthing went Wrong");
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  });

  return (
    <div className="flex justify-center h-[calc(100vh-80px)]">
      <div className="w-1/3 h-2/3 mt-10">
        <h1 className="text-2xl mb-10 text-center">Create your new blog.!</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-[rgba(255,255,255,0.2)] border-[rgba(255,255,255,0.4)] border-[1px] p-5 flex flex-col gap-8 w-full rounded"
        >
          <label>
            <span className="block font-semibold mb-1">Uplode Image:</span>
            <input
              onChange={handleFile}
              type="file"
              accept=".jpg,.jpeg,.png,.svg"
            />
          </label>
          <label>
            <span className="block font-semibold mb-1">Title:</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded text-black font-semibold outline-none"
              type="text"
              placeholder="Add the Title..."
            />
          </label>
          <label>
            <span className="block font-semibold mb-1">Content:</span>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-3 py-2 rounded text-black font-semibold outline-none h-20"
              placeholder="Add the content..."
            ></textarea>
          </label>
          <button
            type="submit"
            className="px-2 py-1 bg-blue-500 text-white font-semibold rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/FireBaseConfig";

const Home = () => {
  const [postList, setPoseList] = useState([]);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setPoseList(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getPosts();
  }, []);

  return (
    <div className="h-full mt-10 flex px-5">
      {postList &&
        postList.map((post, i) => (
          <div key={i} className="p-4 md:w-1/3">
            <div className="h-full shadow hover:-translate-y-1 cursor-pointer shadow-gray-400 hover:shadow-lg rounded-xl overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt="blog"
              />
              <div className="p-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-300 mb-1">
                  {post.author?.name ? post.author.name : "Unknown Author"}
                </h2>
                <h1 className="title-font text-lg font-bold text-gray-100 mb-3">
                  {post.title}
                </h1>
                <p className="leading-relaxed">{post.content}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { fetchPosts } from "../api/axios";
import Post from "../components/Post";

function Home() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetchPosts();
      setposts(resp.data);
      console.log(resp.data);
    })();
  }, []);

  return (
    <>
      {posts.length > 0 ? (
        <div className="bg-gray-900 w-100 min-h-[90vh] px-8 py-14 flex flex-col gap-10 items-center">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="bg-gray-900 w-100 min-h-[90vh] px-8 py-14 flex flex-col gap-10 items-center">
          <div className="w-[30%] h-[30vh] bg-gray-800 flex flex-row items-center justify-center rounded-md text-4xl mt-10">
            No Posts
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

function Post({ post }) {
  return (
    <div className="bg-gray-800 w-[50%] px-4 py-4 rounded-md flex flex-col gap-2">
      <h2 className="text-2xl text-rose-400 font-semibold ">{post.title}</h2>
      <p className="text-xl tracking-wide leading-7">{post.content}</p>
    </div>
  );
}

export default Post;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="  w-[1080x] mx-auto ">
      {loading ? (
        <div className="h-screen w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
          <div className="md:w-[80%]  mx-auto grid lg:grid-cols-2 grid-col-1 px-2 py-3 gap-4">
          {   posts.map((post) => (
          <BlogDetails key={post.id} post={post}/>
        ))}
          </div>
      )}
    </div>
  );
}

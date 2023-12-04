import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <h1>Soy el Posts</h1>
      {posts.map(({ id, title }) => (
        <Post key={id} id={id} title={title} />
      ))}
    </div>
  );
};

export default Posts;

import Feed from "./components/feed";
import PostBox from "./components/postbox/PostBox";

const Home = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <PostBox />
      <div className="flex">
        <Feed />
      </div>
    </div>
  );
};

export default Home;

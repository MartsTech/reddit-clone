import TopCommunities from "components/communities";
import Feed from "components/feed";
import PostBox from "components/postbox";

const Home = () => {
  return (
    <div className="max-w-6xl my-7 mx-auto">
      <PostBox />
      <div className="flex">
        <Feed />
        <TopCommunities />
      </div>
    </div>
  );
};

export default Home;

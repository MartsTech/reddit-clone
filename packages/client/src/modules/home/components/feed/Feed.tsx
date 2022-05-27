import { useGetPaginatedPostListQuery } from "generated/graphql";
import FeedPost from "./components/Post";

const Feed = () => {
  const { data, error } = useGetPaginatedPostListQuery({
    variables: { after: 0, first: 20 },
  });

  return (
    <div>
      {data?.getPaginatedPostList?.map(
        (post) => post && <FeedPost key={post.id} post={post} />
      )}
    </div>
  );
};

export default Feed;

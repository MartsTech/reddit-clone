import {
  Post,
  useGetPaginatedPostListByTopicQuery,
  useGetPaginatedPostListQuery,
} from "generated/graphql";
import type { FC } from "react";
import FeedPost from "./components/Post";

interface Props {
  subreddit?: string;
}

const Feed: FC<Props> = ({ subreddit }) => {
  const { data } =
    typeof subreddit === "undefined"
      ? // eslint-disable-next-line react-hooks/rules-of-hooks
        useGetPaginatedPostListQuery({ variables: { after: 0, first: 20 } })
      : // eslint-disable-next-line react-hooks/rules-of-hooks
        useGetPaginatedPostListByTopicQuery({
          variables: { topic: subreddit, after: 0, first: 20 },
        });

  const posts: Post[] =
    typeof subreddit === "undefined"
      ? // @ts-ignore
        data?.getPaginatedPostList
      : // @ts-ignore
        data?.getPaginatedPostListByTopic;

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => post && <FeedPost key={post.id} post={post} />)}
    </div>
  );
};

export default Feed;

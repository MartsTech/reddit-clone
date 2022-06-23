import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";
import Avatar from "components/avatar";
import {
  GetVoteListByPostIdDocument,
  GetVoteListByPostIdQuery,
  Post,
  useGetVoteListByPostIdQuery,
  useInsertVoteMutation,
  Vote,
} from "generated/graphql";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import TimeAgo from "react-timeago";

interface Props {
  post: Post;
}

const FeedPost: FC<Props> = ({ post }) => {
  const [vote, setVote] = useState<Vote>();
  const { data, loading } = useGetVoteListByPostIdQuery({
    variables: { post_id: post.id },
  });
  const session = useSession();

  const [insertVote] = useInsertVoteMutation({
    update: (cache, { data }) => {
      const getVoteListByPostIdQuery = cache.readQuery({
        query: GetVoteListByPostIdDocument,
        variables: { post_id: post.id },
      }) as any;

      cache.writeQuery({
        query: GetVoteListByPostIdDocument,
        variables: { post_id: post.id },
        data: {
          getVoteListByPost_id: [
            data!.insertVote,
            ...getVoteListByPostIdQuery.getVoteListByPost_id,
          ],
        },
      });
    },
  });

  useEffect(() => {
    if (typeof data !== "undefined" && !loading) {
      const vote = data.getVoteListByPost_id?.find(
        (vote) => vote?.username === session.data?.user?.name
      );
      if (vote && typeof vote !== "undefined") {
        setVote(vote);
      }
    }
  }, [data, session, loading]);

  const upVote = async (isUpvoted: boolean) => {
    if (
      session.status !== "authenticated" ||
      typeof session?.data?.user?.name !== "string"
    ) {
      toast("You need to sign in to Vote!");
      return;
    }

    if (vote?.upvote && isUpvoted) {
      return;
    }

    if (!vote?.upvote && !isUpvoted) {
      return;
    }

    await insertVote({
      variables: {
        post_id: post.id,
        username: session?.data?.user?.name,
        upvote: isUpvoted,
      },
    });
  };

  const displayVotes = (data: GetVoteListByPostIdQuery) => {
    const number = data?.getVoteListByPost_id?.reduce(
      (total, vote) => (vote!.upvote ? (total += 1) : (total -= 1)),
      0
    );

    if (data.getVoteListByPost_id?.length === 0) {
      return 0;
    }

    if (number === 0) {
      return data?.getVoteListByPost_id![0]?.upvote ? 1 : -1;
    }

    return number;
  };

  return (
    <Link href={`/post/${post.id}`}>
      <div
        className="flex cursor-pointer rounded-md border border-gray-300
      bg-white shadow-sm hover:border hover:border-gray-600"
      >
        <div
          className="flex flex-col items-center justify-start space-y-1 rounded-l-md 
        bg-gray-50 p-4 text-gray-400"
        >
          <ArrowUpIcon
            onClick={() => upVote(true)}
            className={`h-6 w-6 hover:bg-gray-200 p-1 rounded-md
          hover:text-red-400 cursor-pointer ${
            typeof vote !== "undefined" && vote.upvote && "text-red-400"
          }`}
          />
          <p className="text-black font-bold text-xs">
            {data ? displayVotes(data) : 0}
          </p>
          <ArrowDownIcon
            onClick={() => upVote(false)}
            className={`h-6 w-6 hover:bg-gray-200 p-1 rounded-md 
          hover:text-blue-400 cursor-pointer ${
            typeof vote !== "undefined" && !vote.upvote && "text-blue-400"
          }`}
          />
        </div>
        <div className="p-3 pb-1">
          <div className="flex items-center space-x-2">
            <Avatar
              src={`https://avatars.dicebear.com/api/open-peeps/${
                post.username || "placeholder"
              }.svg`}
            />
            <p className="text-xs text-gray-400">
              <Link href={`/subreddit/${post!.subreddit![0]!.topic}`}>
                <span
                  className="font-bold text-black hover:text-blue-400
              hover:underline"
                >
                  r/{post.subreddit && post.subreddit[0]?.topic}
                </span>
              </Link>{" "}
              • Posted by u/
              {post.username} <TimeAgo date={post.created_at} />
            </p>
          </div>
          <div className="py-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-sm font-light">{post.body}</p>
          </div>
          {typeof post.image === "string" && post.image.length > 0 && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="w-full" src={post.image} alt={post.title} />
          )}
          <div className="flex space-x-4 text-gray-400">
            <div
              className="flex items-center space-x-1 text-sm font-semibold p-2
            hover:bg-gray-100 cursor-pointer rounded-sm"
            >
              <ChatAltIcon className="h-6 w-6" />
              <p>{post.comments?.length} Comments</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedPost;

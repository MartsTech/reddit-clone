import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChatAltIcon,
} from "@heroicons/react/outline";
import Avatar from "components/avatar";
import type { Post } from "generated/graphql";
import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import TimeAgo from "react-timeago";

interface Props {
  post: Post;
}

const FeedPost: FC<Props> = ({ post }) => {
  const router = useRouter();

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
            className="h-6 w-6 hover:bg-gray-200 p-1 rounded-md
          hover:text-red-400 cursor-pointer"
          />
          <p className="text-black font-bold text-xs">0</p>
          <ArrowDownIcon
            className="h-6 w-6 hover:bg-gray-200 p-1 rounded-md 
          hover:text-blue-400 cursor-pointer"
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

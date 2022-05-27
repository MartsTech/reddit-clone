import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/outline";
import Avatar from "components/avatar";
import type { Post } from "generated/graphql";
import type { FC } from "react";

interface Props {
  post: Post;
}

const FeedPost: FC<Props> = ({ post }) => {
  return (
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
        <div className="">
          <Avatar
            src={`https://avatars.dicebear.com/api/open-peeps/${
              post.username || "placeholder"
            }.svg`}
          />
          <p>
            <span>
              r/{post.subreddit && post.subreddit[0]?.topic} • Posted by u/
              {post.username}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;

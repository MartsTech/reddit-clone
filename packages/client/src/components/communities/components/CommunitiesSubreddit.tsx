import { ChevronUpIcon } from "@heroicons/react/outline";
import Avatar from "components/avatar";
import type { Subreddit } from "generated/graphql";
import Link from "next/link";
import type { FC } from "react";

interface Props {
  subreddit: Subreddit;
  index: number;
}

const CommunitiesSubreddit: FC<Props> = ({ subreddit, index }) => {
  return (
    <div
      className="flex items-center space-x-2 border-t bg-white
      px-4 py-2 last:rounded-b"
    >
      <p>{index + 1}</p>
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green" />
      <Avatar
        src={`https://avatars.dicebear.com/api/open-peeps/subreddit/${subreddit.topic}.svg`}
      />
      <p className="flex-1 truncate">r/{subreddit.topic}</p>
      <Link href={`/subreddit/${subreddit.topic}`}>
        <div
          className="cursor-pointer rounded-full bg-blue-500 
          px-3 text-white"
        >
          View
        </div>
      </Link>
    </div>
  );
};

export default CommunitiesSubreddit;

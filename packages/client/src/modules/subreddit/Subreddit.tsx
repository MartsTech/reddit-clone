import Avatar from "components/avatar";
import Feed from "components/feed";
import PostBox from "components/postbox";
import { FC } from "react";

interface Props {
  topic: string;
}

const Subreddit: FC<Props> = ({ topic }) => {
  return (
    <div className="h-24 bg-red-400 p-8">
      <div className="-mx-8 mt-10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-30">
          <div className="-mt-5">
            <Avatar
              large
              src={`https://avatars.dicebear.com/api/open-peeps/${
                topic || "placeholder"
              }.svg`}
            />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic} subreddit
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-5xl pb-10">
        <PostBox subreddit={topic} />
        <Feed subreddit={topic} />
      </div>
    </div>
  );
};

export default Subreddit;

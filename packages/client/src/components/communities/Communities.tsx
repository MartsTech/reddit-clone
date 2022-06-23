import { useGetSubredditListWithLimitQuery } from "generated/graphql";
import CommunitiesSubreddit from "./components/CommunitiesSubreddit";

const TopCommunities = () => {
  const { data } = useGetSubredditListWithLimitQuery({
    variables: { limit: 10 },
  });

  return (
    <div
      className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px]
      rounded-md border border-gray-300 bg-white lg:inline"
    >
      <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
      <div className="">
        {data?.getSubredditListWithLimit?.map((subreddit, index) => {
          if (subreddit) {
            return (
              <CommunitiesSubreddit
                key={subreddit.id}
                subreddit={subreddit}
                index={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TopCommunities;

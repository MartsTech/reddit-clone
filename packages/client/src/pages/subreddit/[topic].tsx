import Loading from "components/loading";
import Subreddit from "modules/subreddit";
import { useRouter } from "next/router";

const SubredditPage = () => {
  const router = useRouter();
  if (typeof router.query.topic !== "string") {
    return <Loading />;
  }
  return <Subreddit topic={router.query.topic} />;
};

export default SubredditPage;

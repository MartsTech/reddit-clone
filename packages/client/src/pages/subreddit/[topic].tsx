import Loading from "components/loading";
import PageLayout from "layouts/page";
import Subreddit from "modules/subreddit";
import { useRouter } from "next/router";

const SubredditPage = () => {
  const router = useRouter();
  if (typeof router.query.topic !== "string") {
    return (
      <PageLayout>
        <Loading />
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <Subreddit topic={router.query.topic} />
    </PageLayout>
  );
};

export default SubredditPage;

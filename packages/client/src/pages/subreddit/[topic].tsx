import Loading from "components/loading";
import PageLayout from "layouts/page";
import Subreddit from "modules/subreddit";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const SubredditPage: NextPage = () => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};

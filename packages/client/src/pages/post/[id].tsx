import Loading from "components/loading";
import PageLayout from "layouts/page";
import Post from "modules/post";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

const PostPage: NextPage = () => {
  const router = useRouter();

  if (typeof router.query.id !== "string") {
    return (
      <PageLayout>
        <Loading />
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <Post id={router.query.id} />
    </PageLayout>
  );
};

export default PostPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};

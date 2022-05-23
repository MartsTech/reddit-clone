import PageLayout from "layouts/page";
import Home from "modules/home";
import type { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};

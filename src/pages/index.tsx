import PageLayout from "layouts/page";
import Home from "modules/home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;

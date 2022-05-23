import Header from "components/header";
import Head from "next/head";
import type { FC } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ title = "Reddit Clone", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="h-[calc(100vh-10rem)]"> {children}</div>
    </>
  );
};

export default PageLayout;

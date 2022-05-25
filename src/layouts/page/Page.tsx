import Header from "components/header";
import Head from "next/head";
import type { FC } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const PageLayout: FC<Props> = ({ title = "Reddit Clone", children }) => {
  return (
    <div className="h-screen overflow-y-scroll bg-slate-200">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="h-[calc(100vh-10rem)]">{children}</main>
    </div>
  );
};

export default PageLayout;

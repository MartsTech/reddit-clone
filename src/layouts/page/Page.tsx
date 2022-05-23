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
      {children}
    </>
  );
};

export default PageLayout;

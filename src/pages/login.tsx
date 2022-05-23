import Loading from "components/loading";
import PageLayout from "layouts/page";
import Login from "modules/login";
import type { NextPage, GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AuthProviders } from "types/auth";

interface Props {
  providers: AuthProviders | null;
}

const LoginPage: NextPage<Props> = ({ providers }) => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [session, router]);

  if (!providers || session.status === "loading") {
    return (
      <PageLayout>
        <Loading />
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Login providers={providers} />
    </PageLayout>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
};

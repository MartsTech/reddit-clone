import Loading from "components/loading";
import PageLayout from "layouts/page";
import Login from "modules/login";
import type { NextPage, GetServerSideProps } from "next";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import type { AuthProviders } from "types/auth";

interface Props {
  providers: AuthProviders | null;
}

const LoginPage: NextPage<Props> = ({ providers }) => {
  const session = useSession();
  const router = useRouter();

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
  const session = await getSession(context);
  const providers = await getProviders();
  return {
    props: {
      session,
      providers,
    },
  };
};

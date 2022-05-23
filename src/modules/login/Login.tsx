import type { FC } from "react";
import type { AuthProviders } from "types/auth";
import Image from "next/image";
import LoginProvider from "./components/Provider";

interface Props {
  providers: AuthProviders | null;
}

const Login: FC<Props> = ({ providers }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div
        className="flex flex-col items-center p-24 bg-white 
        rounded-md shadow-md"
      >
        <div className="relative w-60 h-20 mb-5">
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
            loading="lazy"
          />
        </div>
        <div className="mt-2">
          {providers &&
            Object.values(providers).map((provider) => (
              <LoginProvider key={provider.name} provider={provider} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Login;

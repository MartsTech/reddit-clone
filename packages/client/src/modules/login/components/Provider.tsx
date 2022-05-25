import { ClientSafeProvider, signIn } from "next-auth/react";
import type { FC } from "react";

interface Props {
  provider: ClientSafeProvider;
}

const LoginProvider: FC<Props> = ({ provider }) => {
  const { id, name } = provider;

  return (
    <button
      onClick={() => signIn(id, { callbackUrl: "/" })}
      className="bg-[#FF4500] text-white py-4 px-16 rounded-full"
    >
      Login with {name}
    </button>
  );
};

export default LoginProvider;

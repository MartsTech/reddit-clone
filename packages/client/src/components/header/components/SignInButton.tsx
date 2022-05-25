import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const HeaderSignInButton = () => {
  const session = useSession();

  return (
    <>
      {session.status === "authenticated" ? (
        <div
          className="hidden md:flex items-center space-x-2 p-2
          border-gray-100 cursor-pointer"
          onClick={() => signOut()}
        >
          <div className="relative h-6 w-6 flex-shrink-0 ml-2">
            <Image
              src="/images/icon.png"
              layout="fill"
              objectFit="contain"
              alt="icon"
            />
          </div>
          <div className="flex-1 text-xs">
            <p className="truncate">{session.data.user?.name}</p>
            <p className="text-gray-400">Sign Out</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <Link href="/login">
          <div
            className="hidden md:flex items-center space-x-2 p-2
            border-gray-100 cursor-pointer"
          >
            <div className="relative h-6 w-6 flex-shrink-0 ml-2">
              <Image
                src="/images/icon.png"
                layout="fill"
                objectFit="contain"
                alt="icon"
              />
            </div>
            <p className="text-gray-400">Sign In</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default HeaderSignInButton;

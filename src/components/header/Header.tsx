import React from "react";
import Image from "next/image";
import { ChevronDownIcon, HomeIcon, MenuIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import HeaderSearchBox from "./components/SearchBox";
import HeaderIcon from "./components/Icon";
import Link from "next/link";
import HeaderSignInButton from "./components/SignInButton";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <Link href="/">
        <div className="relative h-10 w-24 flex-shrink-0 cursor-pointer">
          <Image
            src="/images/logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </div>
      </Link>
      <div className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="h-6 w-6" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-6 w-6" />
      </div>
      <HeaderSearchBox />
      <div
        className="text-gray-500 items-center space-x-2 mx-5
        hidden lg:inline-flex"
      >
        <HeaderIcon Icon={SparklesIcon} />
        <HeaderIcon Icon={GlobeIcon} />
        <HeaderIcon Icon={VideoCameraIcon} />
        <hr className="h-10 border border-gray-100" />
        <HeaderIcon Icon={ChatIcon} />
        <HeaderIcon Icon={BellIcon} />
        <HeaderIcon Icon={PlusIcon} />
        <HeaderIcon Icon={SpeakerphoneIcon} />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <HeaderIcon Icon={MenuIcon} />
      </div>
      <HeaderSignInButton />
    </header>
  );
};

export default Header;

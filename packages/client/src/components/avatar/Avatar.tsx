import Image from "next/image";
import type { FC } from "react";

interface Props {
  src: string;
  large?: boolean;
}

const Avatar: FC<Props> = ({ src, large = false }) => {
  return (
    <div
      className={`relative h-10 w-10 rounded-full border-gray-300
      bg-white overflow-hidden ${large && "h-20 w-20"}`}
    >
      <Image src={src} layout="fill" alt="avatar" />
    </div>
  );
};

export default Avatar;

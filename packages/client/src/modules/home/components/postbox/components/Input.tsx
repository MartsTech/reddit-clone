import type { FC } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  title: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

const PostBoxInput: FC<Props> = ({ title, placeholder, register }) => {
  return (
    <div className="flex items-center px-2 pt-2">
      <p className="min-w-[90px]">{title}</p>
      <input
        {...register}
        type="text"
        placeholder={placeholder}
        className="m-2 flex-1 bg-blue-50 p-2 outline-none"
      />
    </div>
  );
};

export default PostBoxInput;

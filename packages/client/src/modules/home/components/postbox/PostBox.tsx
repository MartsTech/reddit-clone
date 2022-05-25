import { PhotographIcon } from "@heroicons/react/outline";
import Avatar from "components/avatar";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import PostBoxInput from "./components/Input";

type FormData = {
  title: string;
  body: string;
  image: string;
  subreddit: string;
};

const PostBox = () => {
  const session = useSession();
  const [isImageBoxOpened, setIsImageBoxOpened] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="sticky top-16 z-50 bg-white border rounded-md p-2"
    >
      <div className="flex items-center space-x-3">
        <Avatar
          src={`https://avatars.dicebear.com/api/open-peeps/${
            session.data?.user?.name || "placeholder"
          }.svg`}
        />
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder={
            session.status === "authenticated"
              ? `Create a post`
              : "Sign in to post"
          }
          disabled={session.status !== "authenticated"}
          className="flex-1 bg-gray-50 p-2 pl-5 outline-none rounded-md"
        />
        <PhotographIcon
          onClick={() => setIsImageBoxOpened((state) => !state)}
          className={`h-6 text-gray-300 cursor-pointer px-2 ${
            isImageBoxOpened && "text-blue-300"
          }`}
        />
      </div>
      {!!watch("title") && (
        <div className="flex flex-col">
          <PostBoxInput
            title="Body"
            placeholder="Text (Optional)"
            register={register("body")}
          />
          <PostBoxInput
            title="Subreddit"
            placeholder="E.g next.js"
            register={register("subreddit", { required: true })}
          />
          {isImageBoxOpened && (
            <PostBoxInput
              title="Image URL:"
              placeholder="Optional"
              register={register("image")}
            />
          )}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.title?.type === "required" && <p>Title is required</p>}
              {errors.subreddit?.type === "required" && (
                <p>Subreddit is required</p>
              )}
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-blue-400 p-2 text-white mt-2"
          >
            Create Post
          </button>
        </div>
      )}
    </form>
  );
};

export default PostBox;

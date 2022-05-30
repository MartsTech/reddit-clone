import { PhotographIcon } from "@heroicons/react/outline";
import Avatar from "components/avatar";
import {
  GetPaginatedPostListDocument,
  useGetSubredditListByTopicLazyQuery,
  useInsertPostMutation,
  useInsertSubredditMutation,
} from "generated/graphql";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import type { PostFormValues } from "types/post";
import PostBoxInput from "./components/Input";

const PostBox = () => {
  const session = useSession();
  const [getSubredditListByTopic] = useGetSubredditListByTopicLazyQuery({
    fetchPolicy: "network-only",
  });
  const [insertPost] = useInsertPostMutation({
    update: (cache, { data }) => {
      const query = cache.readQuery({
        query: GetPaginatedPostListDocument,
        variables: { after: 0, first: 20 },
      }) as any;
      cache.writeQuery({
        query: GetPaginatedPostListDocument,
        variables: { after: 0, first: 20 },
        data: {
          getPaginatedPostList: [
            data!.insertPost,
            ...query.getPaginatedPostList,
          ],
        },
      });
    },
  });
  const [insertSubreddit] = useInsertSubredditMutation();
  const [isImageBoxOpened, setIsImageBoxOpened] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PostFormValues>();

  const onSubmit = handleSubmit(async (formData) => {
    const notification = toast.loading("Creating new post...");

    try {
      if (typeof session.data?.user?.name !== "string") {
        throw new Error("User not logged in");
      }

      const { data } = await getSubredditListByTopic({
        variables: {
          topic: formData.subreddit,
        },
      });

      if (
        typeof data !== "undefined" &&
        data.getSubredditListByTopic &&
        data.getSubredditListByTopic[0]
      ) {
        await insertPost({
          variables: {
            body: formData.body,
            image: formData.image || "",
            subreddit_id: data.getSubredditListByTopic[0].id,
            title: formData.title,
            username: session.data.user.name,
          },
        });
      } else {
        const result = await insertSubreddit({
          variables: { topic: formData.subreddit },
        });

        if (typeof result.data?.insertSubreddit?.id !== "string") {
          throw new Error("Subreddit not created");
        }

        await insertPost({
          variables: {
            body: formData.body,
            image: formData.image || "",
            subreddit_id: result.data.insertSubreddit.id,
            title: formData.title,
            username: session.data.user.name,
          },
        });
      }
      reset();
      toast.success("New Post Created!", { id: notification });
    } catch (error) {
      toast.error("Something went wrong!", { id: notification });
    }
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

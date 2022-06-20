import FeedPost from "components/feed/components/Post";
import {
  useGetPostListByPostIdQuery,
  useInsertCommentMutation,
  GetPostListByPostIdDocument,
} from "generated/graphql";
import type { Post as PostType } from "generated/graphql";
import type { FC } from "react";
import Loading from "components/loading";
import { useSession } from "next-auth/react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Avatar from "components/avatar";
import TimeAgo from "react-timeago";

interface Props {
  id: string;
}

type FormData = {
  comment: string;
};

const Post: FC<Props> = ({ id }) => {
  const { data } = useGetPostListByPostIdQuery({ variables: { post_id: id } });
  const [insertComment] = useInsertCommentMutation({
    refetchQueries: [
      { query: GetPostListByPostIdDocument, variables: { post_id: id } },
    ],
  });
  const session = useSession();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (typeof session.data?.user?.name !== "string") {
      return;
    }

    const notification = toast.loading("Commenting...");

    await insertComment({
      variables: {
        post_id: id,
        username: session.data.user.name,
        body: data.comment,
      },
    });

    setValue("comment", "");

    toast.success("Comment added!", {
      id: notification,
    });
  };

  if (typeof data === "undefined" || !data.getPostListByPost_id) {
    return <Loading />;
  }

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <FeedPost post={data.getPostListByPost_id[0] as PostType} />
      <div
        className="rounded-b-md border border-t-0 border-gray-300
        bg-white p-5 pl-16 -mt-1"
      >
        <p className="text-sm">
          Comment as{" "}
          <span className="text-red-500">{session.data?.user?.name}</span>
        </p>
        <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register("comment", { required: true })}
            disabled={session.status !== "authenticated"}
            className="h-24 rounded-md border border-gray-200
            p-2 pl-4 outline-none disabled:bg-gray-50 w-full"
            placeholder={
              session.status === "authenticated"
                ? "What are your thoughts?"
                : "Log in to comment"
            }
          />
          <button
            disabled={session.status !== "authenticated"}
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold 
            text-white disabled:bg-gray-600"
          >
            Comment
          </button>
        </form>
      </div>
      <div
        className="-my-5 rounded-b-md border border-t-0 border-gray-300
        bg-white py-5 px-10"
      >
        <hr className="py-2" />
        {data.getPostListByPost_id[0]?.comments?.map((comment) => {
          if (comment) {
            return (
              <div
                key={comment.id}
                className="relative flex items-center space-x-2 space-y-5"
              >
                <hr className="absolute top-10 left-7 z-0 h-16 border" />
                <div className="z-50">
                  <Avatar
                    src={`https://avatars.dicebear.com/api/open-peeps/${
                      comment.username || "placeholder"
                    }.svg`}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="py-2 text-xs text-gray-400">
                    <span className="font-semibold text-gray-600">
                      {comment.username}
                    </span>{" "}
                    . <TimeAgo date={comment.created_at} />
                  </p>
                  <p>{comment.body}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Post;

import { FC } from "react";

interface Props {
  topic: string;
}

const Subreddit: FC<Props> = ({ topic }) => {
  return <div>{topic}</div>;
};

export default Subreddit;

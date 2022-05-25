import type { ComponentProps, FC } from "react";

interface Props {
  Icon: (props: ComponentProps<"svg">) => JSX.Element;
}

const HeaderIcon: FC<Props> = ({ Icon }) => {
  return (
    <Icon
      className="h-9 w-6 lg:w-9 cursor-pointer rounded-sm
      lg:p-1 lg:hover:bg-gray-100"
    />
  );
};

export default HeaderIcon;

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DashBoardLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default DashBoardLayout;

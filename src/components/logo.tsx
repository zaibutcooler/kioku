import { siteConfig } from "@/config/site";

interface Props {}

export const Kioku = ({}: Props) => {
  return <div>{siteConfig.logoName}</div>;
};

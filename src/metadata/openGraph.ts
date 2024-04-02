import { type OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

import { siteConfig } from "@/config/site";

const openGraph: OpenGraph = {
  type: "website",
  siteName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: "% - PWA App",
  },
  description: siteConfig.description,
  images: [
    {
      url: "/icon/android-chrome-512x512",
      type: "image/png",
      width: "48",
      height: "48",
    },
  ],
};

export default openGraph;

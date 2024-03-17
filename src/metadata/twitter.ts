import { type Twitter } from "next/dist/lib/metadata/types/twitter-types"

import { siteConfig } from "@/config/site"

const twitter: Twitter = {
  card: "summary",
  title: {
    default: siteConfig.name,
    template: "% - PWA App",
  },
  description: siteConfig.description,
}

export default twitter

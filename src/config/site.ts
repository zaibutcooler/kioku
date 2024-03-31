export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Kioku",
  description:
    "real estate agents with cutting-edge AI technology to supercharge productivity and streamline operations. Discover how Premerly revolutionizes the real estate industry with generative ai.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  url: process.env.WEBSITE_URL,
  links: {
    twitter: "https://twitter.com/ArchaicAI",
    docs: `${process.env.ARCHAIC_URL}/docs`,
  },
}

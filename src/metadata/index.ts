import { type Metadata } from "next";
// import icons from "@/metadata/icons"
import openGraph from "@/metadata/openGraph";
import robots from "@/metadata/robot";
import twitter from "@/metadata/twitter";

import { siteConfig } from "@/config/site";

export const siteMetadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  manifest: "/manifest.json",
  icons: {
    icon: "/icon/favicon.ico",
    shortcut: "/icon/favicon-16x16.png",
    apple: "/icon/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph,
  robots,
  twitter,
};

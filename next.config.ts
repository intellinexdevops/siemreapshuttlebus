import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://warmhearted-goose-69.convex.cloud/api/storage/**"),
    ],
  },
  output: "standalone",
};

export default nextConfig;

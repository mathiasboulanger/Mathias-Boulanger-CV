import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // There is a stray package.json + lockfile in the home directory, so Next
  // walks up and infers /Users/Mathias_1 as the workspace root, then fails to
  // resolve tailwindcss. Pin the root to this project.
  turbopack: {
    root: __dirname,
  },
  outputFileTracingRoot: __dirname,
  basePath: "/Mathias-Boulanger-CV",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // ✅ enables static HTML export
  images: {
    unoptimized: true, // ✅ prevents image optimization errors during export
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "fedskillstest.ct.digital",
  //       port: "",
  //       pathname: "/**",
  //     },
  //   ],
  // },
};

export default nextConfig;

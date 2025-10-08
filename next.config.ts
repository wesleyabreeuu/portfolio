import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio"; 

const nextConfig: NextConfig = {
  output: "export",                 
  images: { unoptimized: true },    
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  // opcional: trailingSlash: true,
};

export default nextConfig;

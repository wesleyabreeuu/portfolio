import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "portfolio";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,

  eslint: { ignoreDuringBuilds: true },
  
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },// <- NÃO trava o build por lint
};

export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async redirects() {
    return [
      {
        source: "/estudos/compositores-da-harpa/epilogo",
        destination: "/estudos/compositores-da-harpa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

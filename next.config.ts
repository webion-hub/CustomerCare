import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Il progetto vive in una cartella con un altro lockfile più in alto:
  // fissiamo la root su questa directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

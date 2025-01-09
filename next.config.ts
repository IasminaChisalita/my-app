import { NextConfig } from 'next';

const nextConfig: any = {
    experimental: {
        appDir: true,
        swcPlugins: [
            ["next-superjson-plugin", {}]
        ]
    },
};

export default nextConfig;

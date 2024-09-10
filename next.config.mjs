/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/seed/picsum/200/300'
            }
        ]
    }
};

export default nextConfig;

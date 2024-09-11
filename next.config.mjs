/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/seed/picsum/200/300'
            },
            {
                protocol: 'https',
                hostname: 'cdn-images-1.medium.com',
                pathname: '/max/1024/*'
            }
        ]
    }
};

export default nextConfig;

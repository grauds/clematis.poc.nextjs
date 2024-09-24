/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'random-d.uk',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['opera-firebase.appspot.com'], // Add the domain(s) you want to allow here
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'opera-firebase.appspot.com',
        //         port: '',
        //         pathname: '/**',
        //     },
        // ],
    },
}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/landing',
                destination: '/',
                permanent: true,
            }
        ]
    }
}
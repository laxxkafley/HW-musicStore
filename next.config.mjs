/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'th.yamaha.com',
          port: '',
          pathname: '/**',
        },
       
        {
            protocol: 'https',
            hostname: ' encrypted-tbn0.gstatic.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'lindoguitars.com',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: ' guitarhunter.dk',
            port: '',
            pathname: '/**',
          }, {
            protocol: 'https',
            hostname: 'static.wixstatic.com',
            port: '',
            pathname: '//**',
          },
          
         
      ],
    },
  };
  export default nextConfig;
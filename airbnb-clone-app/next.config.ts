import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
    
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'links.papareact.com',
      },
      
      
    ],
  }


  // images:{
  //   domains:['images.unsplash.com','links.papareact.com'],
  // }
  /* config options here */
};

export default nextConfig;

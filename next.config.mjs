/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" }, // Existing domain
      { hostname: "res.cloudinary.com" }, // ✅ Add Cloudinary
    ],
  },
};

export default nextConfig;

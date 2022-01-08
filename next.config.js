/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "a0.muscache.com"],
  },
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
  },
};

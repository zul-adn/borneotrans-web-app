module.exports = {
  env: {
    API_URL: process.env.API_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    // STRIPE_KEY: process.env.STRIPE_KEY,
  },
  images: {
    domains: ["localhost", "images.unsplash.com"],
  },
  experimental: {
    // Enables the styled-components SWC transform
  },
};

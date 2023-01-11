module.exports = {
  env: {
    API_URL: process.env.API_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    PUBLIC_URL: "/",
    // STRIPE_KEY: process.env.STRIPE_KEY,
  },
  images: {
    domains: [
      "https://borneotrans.vercel.app",
      "images.unsplash.com",
      "https://borneotrans-api.amazingborneo.id",
    ],
  },
  experimental: {
    // Enables the styled-components SWC transform
  },
};

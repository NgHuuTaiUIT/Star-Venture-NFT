const path = require("path");

const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  webpack(config) {
    // This is just for the sake of example app.
    // yarn link doesn't play well with React hooks.
    // https://github.com/facebook/react/issues/14257
    Object.assign(config.resolve.alias, {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom")
    });

    return config;
  }
});

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Referrer-Policy",
    value: "unsafe-url"
  }
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders
      }
    ];
  }
};

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://www.youtube.com/:path*"
      }
    ];
  }
};

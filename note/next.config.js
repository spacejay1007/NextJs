/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      //  영원히 사라진 페이지
      {
        source: "/products/deleted_forever", //  이 경로로 왓을때 (영원히 삭제 된 URL) > statusCode 308 을 전달
        destination: "/products", // source 로 들어온 것이 삭제 되었을떄 destination 으로 이동
        permanent: true, // 영원히 여기로 옮겨 왔다 라고 지정
      },
      // 일시적으로 중지된 페이지
      {
        source: "/products/deleted", //  이 경로로 왓을때 (영원히 삭제 된 URL) > statusCode 308 을 전달
        destination: "/products", // source 로 들어온 것이 삭제 되었을떄 destination 으로 이동
        permanent: true, // 영원히 여기로 옮겨 왔다 라고 지정
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;

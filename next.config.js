/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ESLint 오류가 있으면 프로덕션 빌드(next build) 실패
  eslint: {
    ignoreDuringBuilds: true,
  },
  // emotion 을 next.js 컴파일러(swc) 적용
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;

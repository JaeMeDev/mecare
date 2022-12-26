const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  // minification 적용
  swcMinify: true,
  // ESLint 오류가 있으면 프로덕션 빌드(next build) 실패
  eslint: {
    ignoreDuringBuilds: true,
  },
  // emotion 을 next.js 컴파일러(swc) 적용
  compiler: {
    reactRemoveProperties: isProd && {
      properties: ['^data-test'],
    },
    removeConsole: isProd && {
      exclude: ['error'],
    },
    emotion: true,
  },
};

module.exports = nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 정적 사이트로 내보내기 (out/ 폴더 → GitHub Pages)
  output: 'export',
  // 정적 export에서는 이미지 최적화 서버를 쓸 수 없다
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;

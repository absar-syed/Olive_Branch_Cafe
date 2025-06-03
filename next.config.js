/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  images: { unoptimized: true } // Disables Image Optimization API (not needed for static)
}

module.exports = nextConfig
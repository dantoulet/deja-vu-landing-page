import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { imagetools } from 'vite-imagetools';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      'Permissions-Policy': 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), interest-cohort=(), private-state-token-issuance=(), private-state-token-redemption=()',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  },
  plugins: [
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams({
        format: 'webp',
        quality: '80',
        w: '800;1200;1600',
        fit: 'cover'
      })
    })
  ],
  build: {
    target: ['esnext', 'edge88', 'firefox78', 'chrome87', 'safari14'], // Modern browsers only
    modulePreload: false, // Disable legacy module preload polyfill
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': [
            '@/components/ui/alert-dialog.tsx',
            '@/components/ui/alert.tsx',
            '@/components/ui/badge.tsx',
            '@/components/ui/button.tsx',
            '@/components/ui/dialog.tsx',
            '@/components/ui/input.tsx',
            '@/components/ui/toast.tsx',
            '@/components/ui/dropdown-menu.tsx',
            '@/components/ui/carousel.tsx',
            '@/components/ui/sheet.tsx',
            '@/components/ui/scroll-area.tsx'
          ],
          'layout': ['@/components/Layout.tsx', '@/components/Footer.tsx', '@/components/ScrollProgressBar.tsx'],
          'features': ['@/components/Newsletter.tsx', '@/components/CookieConsent.tsx'],
          'utils': ['@/lib/utils.ts', '@/lib/translations.ts', '@/lib/seo.ts']
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 2
      }
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

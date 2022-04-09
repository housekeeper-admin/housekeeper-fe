import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    mode: 'development',
    plugins: [
        reactRefresh()
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        mainFields: ['browser', 'module', 'main'],
        extensions: ['.js', '.json', '.jsx'],
        alias: [{
                find: '@',
                replacement: path.resolve(__dirname, './src')
            },
            {
                find: "components",
                replacement: path.resolve(__dirname, './src/components')
            },
            {
                find: "pages",
                replacement: path.resolve(__dirname, './src/pages')
            },
            {
                find: "storage",
                replacement: path.resolve(__dirname, './src/storage')
            },
            {
                find: "utils",
                replacement: path.resolve(__dirname, './src/utils')
            },
            {
                find: "configs",
                replacement: path.resolve(__dirname, './src/configs')
            },
            {
                find: "apis",
                replacement: path.resolve(__dirname, './src/apis')
            },
            {
                find: "services",
                replacement: path.resolve(__dirname, './src/services')
            },
        ]
    },
    build: {
        reportCompressedSize: false,
        cssCodeSplit: true,
        sourcemap: true,
        assetsDir: 'static/img/',
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
            },
        },
    },
    server: {
        host: true,
        port: 3096,
        cors: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8096/',
                // changeOrigin: true,
                rewrite: (path) => path.replace(/\/api/, ''),
                configure: (proxy, options) => {
                    // proxy 是 'http-proxy' 的实例
                }
            }
        }
    }
})
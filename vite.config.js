// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import eslint from 'vite-plugin-eslint';
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';

import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
    ],

    css: {
        postcss: {
            plugins: [autoprefixer(),
            ],
        },
    },
    define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for segment analytics lib to work
        global: {},
    },
});

import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'happy-dom',
        globals: true,
        include: ['./test/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    },
});

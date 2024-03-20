/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.js'), // Tu punto de entrada principal
            name: 'MyWebComponents',
            formats: ['es', 'umd'], // ES6 y UMD para compatibilidad
            fileName: (format) => `my-webcomponents.${format}.js`
        },
        rollupOptions: {
            // Opciones específicas de Rollup para manejar dependencias externas, etc.
        },
        // Habilitar CSS externo en lugar de incrustarlo
        cssCodeSplit: true,
        sourcemap: true, // Opcional: Habilitar sourcemaps para depuración
    }
});

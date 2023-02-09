/*import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {dirname, resolve} from "node:path";
import {fileURLToPath, URL} from "node:url";
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    plugins: [
        vue(),
        vueI18n({
            /!* options *!/
            // locale messages resource pre-compile option
            include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/!**'),
        }),
    ],
    meteor: {
        clientEntry: 'ui/main.js',
    },
    optimizeDeps: {
        exclude: ['vue-meteor-tracker'],
    },
})*/

import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
    plugins: [
        vue(),
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), 'locales/**'),
        })
    ],
    meteor: {
        clientEntry: 'ui/main.js',
    },
    optimizeDeps: {
        exclude: ['vue-meteor-tracker'],
    }
});

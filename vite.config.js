/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-08-22 09:45:00
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-08-22 20:52:38
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { version } from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: resolve(__dirname, `./dist/v${version}`)
  },
  plugins: [vue()]
})

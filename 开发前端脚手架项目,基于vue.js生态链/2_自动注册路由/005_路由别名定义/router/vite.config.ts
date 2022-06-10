import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    /* 这行指的@符代表的是src,省略的很多路径 */
    alias:{'@':path.resolve(__dirname,'src')}
  }
})

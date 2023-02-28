import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import * as path from 'path'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import { setupPlugins } from './vite/plugins'
// https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [vue()],
//   resolve:{
//     /* 这行指的@符代表的是src,省略的很多路径 */
//     alias//去定义别名
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  // console.log(command);//server,build生产模式
  // console.log(mode);//开发模式development模式
  const isBuild = command == 'build'//生产模式

  /* 获取当前目录 */
  const root = process.cwd()
  const env = parseEnv(loadEnv(mode, root))//当前目录
  // console.log(env);
  /* 被方法包裹着 */
  
 
  // console.log(typeof parseEnv(env))//object
  
  // console.log(typeof parseEnv(env).VITE_ROUTER_AUTOLOAD);//boolean
  // console.log(typeof parseEnv(env).VITE_SOME_KEY); //number
  // console.log(typeof parseEnv(env).VITE_API_URL);//string
  
  
  return {
    // plugins: [vue()],
    plugins:setupPlugins(isBuild,env),
    resolve: {
      /* 这行指的@符代表的是src,省略的很多路径 */
      alias//去定义别名
    }
  }
}

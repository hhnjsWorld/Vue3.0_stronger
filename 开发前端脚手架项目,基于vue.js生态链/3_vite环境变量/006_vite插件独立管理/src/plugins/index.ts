import { App } from "vue";
/* 引入相关的index */
import { setupTailwindCss } from "./tailwindcss/index";
/* 释放插件 */
export function setupPlugins(app:App){
    setupTailwindCss()//释放某一个
}
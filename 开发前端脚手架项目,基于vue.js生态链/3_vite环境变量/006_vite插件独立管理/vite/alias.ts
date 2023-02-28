import path from "path";
import { AliasOptions } from "vite";
/* 一个路径指挥着src里面的路径 */
const alias = {'@':path.resolve(__dirname,'../src')} as AliasOptions
export default alias
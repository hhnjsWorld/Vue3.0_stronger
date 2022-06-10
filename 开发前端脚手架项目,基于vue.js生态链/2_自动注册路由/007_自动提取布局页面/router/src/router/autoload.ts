/* 完成自动注册路由 */
// {
//     path:'admin',
//     component:{},
//     children:[
//     ]
// }

import { RouteRecordRaw} from "vue-router";

/* 变成以上的解构 */
const layouts = import.meta.globEager("../layouts/*.vue")
// console.log(layouts);



/* 遍历 */
Object.entries(layouts).forEach(([file,module])=>{
    // console.log(file);//查看到路由路径
    const route = getRouteByModule(file,module)
    
})

function getRouteByModule(file:string,module:{[key:string]:any}){
    console.log(file,module);
    
}

const layoutRoutes = [] as RouteRecordRaw[]
export default layoutRoutes

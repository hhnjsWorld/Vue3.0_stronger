/* 完成自动注册路由 */
// {
//     path:'/admin',
//     component:{},
//     children:[
// {path: /admin/user}以这种方式的话
//     ]
// }



import { RouteRecordRaw, viewDepthKey } from "vue-router";

/* 变成以上的解构 */
const layouts = import.meta.globEager("../layouts/*.vue")
// console.log(layouts);

/* 遍历到子目录 */
const views = import.meta.globEager('../views/**/*.vue')
// console.log(views);
/* 封装成一个遍历路由函数 */
function getRoutes() {
    /* 处理路由数组 */
    const layoutRoutes = [] as RouteRecordRaw[]
    /* 遍历 */
    Object.entries(layouts).forEach(([file, module]) => {
        // console.log(file);//查看到路由路径
        const route = getRouteByModule(file, module)
        /* 子路由提取 */
        route.children = getChildrenRoutes(route)

        layoutRoutes.push(route)
    })
    return layoutRoutes
}

/* 封装成一个遍历 子 路由函数 */
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
    // console.log(layoutRoute);
    const routes = [] as RouteRecordRaw[];
    Object.entries(views).forEach(([file, module]) => {
        // console.log(file);
        if (file.includes(`../views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module)
            routes.push(route)
        }
    })
    return routes;
}


/* 拆解路径 */
function getRouteByModule(file: string, module: { [key: string]: any }) {
    // console.log(file,module);

    /* 取得某个路由的方法 */
    // const name = file.split('/').pop()?.split('.')[0]

    /* 使用正则获得某个的话 */
    // console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name);

    /* 正则的删除法获取路由 */
    const name = file.replace(/.+layouts\/|\.vue/gi, '')
    const route = {
        /* 获取name */
        name,
        /* 获取/name */
        path: `/${name}`,
        /* 组件默认注册 */
        component: module.default,
    } as RouteRecordRaw
    // console.log(route);
    return route

}


export default getRoutes()

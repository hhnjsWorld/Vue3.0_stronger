import _ from 'lodash'
//最终返回该是什么类型就是什么类型,鉴定类型是什么
export function parseEnv(env: Record<string, any>) {
    /* 深拷贝判定 */
    const envs = _.cloneDeep(env)
    Object.entries(env).forEach(([key, value]) => {
        
        /* 首先判断布尔值 */
        if (value == 'true' || value == 'false') {
            env[key] = value == 'true' ? true : false
        }
        /* 再判断数值*/
        if (/^\d+$/.test(value)) {
            env[key] = parseInt(value)
        }

    })
    return envs
}
//  type RR<T exends keyof any,B> = {
//      [P in T ]:B
//  }
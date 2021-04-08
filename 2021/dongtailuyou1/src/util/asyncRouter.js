/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
    return /^http[s]?:\/\/.*/.test(s)
}

const _import = name => () =>
    import('@/views/' + name + '.vue')

/**
 * 添加动态(菜单)路由
 * @param {*} menuList 菜单列表
 * @param {*} routes 递归创建的动态(菜单)路由
 */
export function fnAddDynamicMenuRoutes(menuList = [], routes = []) {
    var temp = []
    for (var i = 0; i < menuList.length; i++) {
        if (menuList[i].list && menuList[i].list.length >= 1) {
            temp = temp.concat(menuList[i].list)
        } else if (menuList[i].url && /\S/.test(menuList[i].url)) {
            menuList[i].url = menuList[i].url.replace(/^\//, '')
            let url = menuList[i].url
            if (menuList[i].perms) {
                url = menuList[i].perms.replace(/^\//, '')
            }
            var route = {
                path: url.replace('/', '-'),
                component: null,
                name: menuList[i].url.replace('/', '-'),
                meta: {
                    menuId: menuList[i].menuId,
                    title: menuList[i].name,
                    isDynamic: true,
                    isTab: true,
                    iframeUrl: ''
                }
            }
            // url以http[s]://开头, 通过iframe展示
            if (isURL(menuList[i].url)) {
                route['path'] = `i-${menuList[i].menuId}`
                route['name'] = `i-${menuList[i].menuId}`
                route['meta']['iframeUrl'] = menuList[i].url
            } else {
                try {
                    route['component'] = _import(`${menuList[i].url}`) || null
                } catch (e) { }
            }
            routes.push(route)
        }
    }
    if (temp.length >= 1) {
        fnAddDynamicMenuRoutes(temp, routes)
    }
    return routes
}
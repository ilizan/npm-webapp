export let apiRoutesJson = [
    {
        "name": "用户管理",
        "url": null,
        "perms": null,
        "type": 0,
        "icon": "system",
        "orderNum": 0,
        "open": null,
        "list": [
            {
                "name": "用户",
                "url": "User/User",
                "perms": null,
                "type": 1,
                "icon": "admin",
                "orderNum": 1,
                "open": null,
                "list": null
            },
            {
                "name": "用户2",
                "url": "User/UserList",
                "perms": null,
                "type": 1,
                "icon": "admin",
                "orderNum": 2,
                "open": null,
                "list": null
            }
        ]
    },
    {
        "name": "用户查看",
        "url": "User/UserView",
        "perms": null,
        "type": 1,
        "icon": "admin",
        "orderNum": 2,
        "open": null,
        "list": null
    }
]
export let apiJsonNull = []
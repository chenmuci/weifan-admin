export default [
    {
        "title": "首页",
        "path": "/home",
        "component": "views/home/index",
        "icon": "DashboardOutlined",
        "locale": "route.home",
        "link": '0',
        "keepAlive": '1',
        "cache": '1',
        "hide": '0',
        "iframe": '0'
    },
    {
        "title": "文档中心",
        "path": "/doc",
        "component": "layout/index",
        "icon": "ReadOutlined",
        "locale": "route.doc",
        "children": [
            {
                "title": "帮助文档",
                "path": "/doc/help",
                "component": "views/doc/help/index",
                "icon": "QuestionCircleOutlined",
                "locale": "route.doc.help"
            },
            {
                "title": "Knife4j 接口文档",
                "path": "/doc/knife4j",
                "component": "",
                "icon": "ApiOutlined",
                "locale": "route.doc.knife4j"
            },
            {
                "title": "Swagger 接口文档",
                "path": "/doc/swagger",
                "component": "",
                "icon": "ApiOutlined",
                "locale": "route.doc.swagger"
            }
        ]
    },
    {
        "title": "开发者工具",
        "path": "/devtools",
        "component": "layout/index",
        "icon": "GlobalOutlined",
        "locale": "route.devtools",
        "children": [
            {
                "title": "表单生成",
                "path": "/devtools/form",
                "component": "views/devtools/form/index",
                "icon": "FileTextOutlined",
                "locale": "route.devtools.form"
            },
            {
                "title": "代码生成",
                "path": "/devtools/gen",
                "component": "views/devtools/gen/index",
                "icon": "CodeOutlined",
                "locale": "route.devtools.gen"
            }
        ]
    },
    {
        "title": "日志管理",
        "path": "/logs",
        "component": "layout/index",
        "icon": "SaveOutlined",
        "locale": "route.logs",
        "children": [
            {
                "title": "更新日志",
                "path": "/logs/change",
                "component": "views/logs/change/index",
                "icon": "FileSyncOutlined",
                "locale": "route.logs.change"
            },
            {
                "title": "登录日志",
                "path": "/logs/login",
                "component": "views/logs/login/index",
                "icon": "LoginOutlined",
                "locale": "route.logs.login"
            },
            {
                "title": "操作日志",
                "path": "/logs/operate",
                "component": "views/logs/operate/index",
                "icon": "FileAddOutlined",
                "locale": "route.logs.operate"
            }
        ]
    },
    {
        "title": "系统监控",
        "path": "/monitor",
        "component": "layout/index",
        "icon": "DesktopOutlined",
        "locale": "route.monitor",
        "children": [
            {
                "title": "在线用户",
                "path": "/monitor/online",
                "component": "views/monitor/online/index",
                "icon": "SolutionOutlined",
                "locale": "route.monitor.online"
            },
            {
                "title": "服务器监控",
                "path": "/monitor/server",
                "component": "views/monitor/server/index",
                "icon": "FundOutlined",
                "locale": "route.monitor.server"
            },
            {
                "title": "存储监控",
                "path": "/monitor/storage",
                "component": "views/monitor/storage/index",
                "icon": "CloudServerOutlined",
                "locale": "route.monitor.storage"
            }
        ]
    },
    {
        "title": "系统管理",
        "path": "/system",
        "component": "layout/index",
        "icon": "SettingOutlined",
        "locale": "route.system",
        "children": [
            {
                "title": "系统配置",
                "path": "/system/setting",
                "component": "views/system/setting/index",
                "icon": "AppstoreOutlined",
                "locale": "route.system.setting"
            },
            {
                "title": "字典管理",
                "path": "/system/dict",
                "component": "views/system/dict/index",
                "icon": "BookOutlined",
                "locale": "route.system.dict"
            },
            {
                "title": "租户管理",
                "path": "/system/tenant",
                "component": "views/system/tenant/index",
                "icon": "TeamOutlined",
                "locale": "route.system.tenant"
            },
            {
                "title": "用户管理",
                "path": "/system/user",
                "component": "views/system/user/index",
                "icon": "UserOutlined",
                "locale": "route.system.user"
            },
            {
                "title": "权限管理",
                "path": "/system/role",
                "component": "views/system/role/index",
                "icon": "FileProtectOutlined",
                "locale": "route.system.role"
            },
            {
                "title": "部门管理",
                "path": "/system/dept",
                "component": "views/system/dept/index",
                "icon": "ApartmentOutlined",
                "locale": "route.system.dept"
            },
            {
                "title": "菜单管理",
                "path": "/system/menu",
                "component": "views/system/menu/index",
                "icon": "MenuOutlined",
                "locale": "route.system.menu"
            }
        ]
    }
]
const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Edit.vue'], resolve)
    },
    {
        path: '/edit/:id',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Edit.vue'], resolve)
    },
    {
        path: '/edit',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Edit.vue'], resolve)
    },
    {
        path: '/editModule/:id',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./EditModule.vue'], resolve)
    },
    {
        path: '/editModule',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./EditModule.vue'], resolve)
    },
    {
        path: '/detail/:id',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Detail.vue'], resolve)
    },
    {
        path: '/apilist/:id',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./ApiList.vue'], resolve)
    }
];
export default routers;

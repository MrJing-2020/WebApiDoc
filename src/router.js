const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Detail.vue'], resolve)
    },
    {
        path: '/edit',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Edit.vue'], resolve)
    },
    {
        path: '/detail',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./Detail.vue'], resolve)
    }
];
export default routers;

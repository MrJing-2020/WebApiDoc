const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./App.vue'], resolve)
    },
    {
        path: '/mrjing',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./MrJing.vue'], resolve)
    }
];
export default routers;

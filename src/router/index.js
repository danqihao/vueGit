import Vue from 'vue';
import Router from 'vue-router';
//import vSidebar from './Sidebar.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            redirect:'/home/vSidebar/basetable',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/home/vSidebar',
                    redirect:'/home/vSidebar/basetable',
                    component: resolve => require(['../components/common/Sidebar.vue'], resolve),
                    children:[
                        {
                            path: '/home/vSidebar/Readme',
                            component: resolve => require(['../components/page/Readme.vue'], resolve)
                        },
                        {
                            path: '/home/vSidebar/basetable',
                            component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                        },
                        {
                            path: '/home/vSidebar/vuetable',
                            component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                        },
                        {
                            path: '/home/vSidebar/baseform',
                            component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                        },
                        {
                            path: '/home/vSidebar/vueeditor',
                            component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                        },
                        {
                            path: '/home/vSidebar/markdown',
                            component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                        },
                        {
                            path: '/home/vSidebar/upload',
                            component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                        },
                        {
                            path: '/home/vSidebar/basecharts',
                            component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                        },
                        {
                            path: '/home/vSidebar/drag',
                            component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                        }
                    ]
                },
                {
                    path: '/home/vSidebarTwo',
                    redirect:'/home/vSidebarTwo/Readme',
                    component: resolve => require(['../components/common/sidebarTwo.vue'], resolve),
                    children:[
                        {
                            path: '/home/vSidebarTwo/Readme',
                            component: resolve => require(['../components/page/Readme.vue'], resolve)
                        },
                        {
                            path: '/home/vSidebarTwo/basetable',
                            component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                        },
                        {
                            path: '/home/vSidebarTwo/vuetable',
                            component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                        },
                        {
                            path: '/home/vSidebarTwo/baseform',
                            component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                        },
                        {
                            path: '/home/vSidebarTwo/vueeditor',
                            component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                        },
                        {
                            path: '/home/vSidebarTwo/markdown',
                            component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                        },
                        {
                            path: '/home/vSidebarTwo/upload',
                            component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                        },
                        {
                            path: '/home/vSidebarTwo/basecharts',
                            component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                        },
                        {
                            path: '/home/vSidebarTwo/drag',
                            component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                        }
                    ]
                },
               
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})

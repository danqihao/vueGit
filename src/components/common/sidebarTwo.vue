<template>
<div style="">
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
    <div class="content">
        <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
</div>
  
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        icon: 'el-icon-date',
                        index: '3',
                        title: '工艺基础管理',
                        subs: [
                            {
                                index: '/home/vSidebar/basetable',
                                title: '工艺基础信息'
                            },
                            {
                                index: '/home/vSidebarTwo/vueeditor',
                                title: '工艺段基础信息'
                            },
                            {
                                index: '/home/vSidebarTwo/markdown',
                                title: '工序基础信息'
                            },
                            {
                                index: '/home/vSidebarTwo/upload',
                                title: '工步基础信息'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '/home/vSidebarTwo/basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: '/home/vSidebarTwo/drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 250px;
        left: 0;
        top: 100px;
        bottom:0;
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
    .content{
        background: none repeat scroll 0 0 #fff;
        position: absolute;
        left: 250px;
        right: 0;
        top: 100px;
        bottom:0;
        width: auto;
        padding:40px;
        box-sizing: border-box;
        overflow-y: scroll;
}
</style>

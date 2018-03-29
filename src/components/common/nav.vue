<template>
    <div class="header">
        <div class="logo">{{head.title}}</div>
        <div class="user-info">
            <div>
                <a href="#/home/vSidebar" @click="getHead()" class = "select">工艺管理</a>
            </div>
            <div>
                <a href="#/home/vSidebarTwo" @click="getHead()">系统设置</a>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        computed:{
            ...mapGetters(['head'])
        },
        methods:{
            getHead(){
                var allA = document.querySelectorAll(".user-info a")
                for(var i=0;i<allA.length;i++){
                    allA[i].className=""
                }
                var nav = event.currentTarget.innerText
                event.currentTarget.className ="select"
                this.$store.commit('setHead',nav)
            }
        }
    }
</script>
<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        font-size: 18px;
        line-height: 50px;
        background-color: #333333;
    }
    .logo{
        float: left;
        width:250px;
        text-align: center;
        color: #fff;
        background-color:#222222;
    }
    .user-info div{
        float: left;
        font-size: 16px;
        color: #fff;
    }
    .user-info div a{
        display: inline-block;
        color: #fff;
        padding:0 50px;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info div a.select{
        background-color:#222222;
    }
    .user-info div a:hover{
        background-color:#222222;
    }
</style>

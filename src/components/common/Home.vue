<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-nav></v-nav>
        <router-view></router-view>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import vNav from './nav.vue';
    export default {
        components:{
            vHead, vSidebar,vNav
        }
    }
</script>

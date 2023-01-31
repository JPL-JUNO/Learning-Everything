<!-- 针对/sellerPage这条路径而显示出来的 -->
<!-- 在这个组件中，通过显示子组件注册的方式，显示出seller.vue这个组件 -->
<template>
    <div class="com-page">
        <seller></seller>
    </div>
</template>

<script>
import Seller from '@/components/seller.vue'
export default {
    data() { 
        return {}
    },
    methods: {},
    components: {
        seller: Seller
    }
}
</script>
<style>
</style>
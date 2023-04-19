<template>
    <div>
        <MyHeader></MyHeader>
        <router-view></router-view>
    </div>
</template>
<script>
import MyHeader from "@/components/headerPage.vue"
    export default{
        components:{MyHeader},
        data(){
            return{
                
            }
        }

    }
</script>

<style>

</style>
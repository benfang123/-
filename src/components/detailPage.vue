<template>
    <div>
        <h1>{{ detailData.productName }}</h1>
        <div v-html="detailData.detail"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                detailData:{}
            }
        },
        methods:{
            getData(pid){
                console.log(pid)
                this.$axios({
                    methods:'get',
                    url:`http://api.mm2018.com:8095/api/goods/productDet?productId=${pid}`
                }).then(res=>{
                    console.log("**************"+res)
                    this.detailData=res.data
                })
            }
        },
        mounted(){
            const pid=this.$route.query.productid;
            this.getData(pid)
        }

    }
</script>
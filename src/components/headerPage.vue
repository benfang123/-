<template>
    <div>
        <div class="top">
            <div class="content">
                <img class="logo" src="@/assets/images/logo.jpg" alt="">
                <img class="ad_top" src="@/assets/images/ad_top.jpg" alt="">
            </div>
    </div>
        <div class="menu">
            <div class="content">
                <ul>
                    <li class="bg_active"><router-link to="/home">首页</router-link></li>
                    <li><router-link to='/alllist'>全部商品</router-link></li>
                </ul>
            </div>
            
        </div> 
    </div>
    
</template>
<script>
    export default{
        name:'MyHeader',
        data(){
            return{
                
            }
        }

    }
</script>

<style scoped>
.top{
    width: 100%;
    height: 104px;
    background-color: #348408;
}
.content{
    margin: 0 auto;
    width: 60%;
}
.logo{
    float: left;
}
.ad_top{
    float: right;
}
.menu{
    width: 100%;
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid #dbdbdb;
}
.menu ul {
    display: flex;
}
.menu ul li{
    width: 20%;
    text-align: center;
    /* background-color: #348408; */
    height: 52px;
}
</style>
<template>
    <div class="homepage">
      <div class="banner">
        <el-carousel height="600px">
          <el-carousel-item v-for="(item, i) in banner" :key="i">
            <img :src="item.picUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
  
      <div class="main" v-for="(item, i) in allList" :key="i">
        <!-- 只显示第一个和最后一个 -->
        <div class="top_and_button" v-if="item.type === 1">
          <div class="ad_product_menu">
            <img src="@/assets/images/ad_product.jpg" alt="">
          </div>
          <div class="ad_product_main">
            <ul>
              <li v-for="(ad, i) in item.contents" :key="i">
                <img :src="ad.picUrl" alt="">
              </li>
            </ul>
          </div>
        </div>
  
        <div class="tuijian" v-if="item.type === 2">
            <div class="index_hot_menu">{{ item.name }}</div>
            <div class="index_hot_main">
              <ul>
                <li v-for="(hotdetail,i) in item.contents" :key="i">
                  <img :src="hotdetail.picUrl" alt="">
                </li>
              </ul>
            </div>
        </div>
  
        <div class="shangpin" v-if="item.type === 3">
          <div class="index_hot_menu">{{ item.name }}</div>
          <div class="index_productlist_container">
            <div class="index_productlist_left" v-for="(bigImg, i) in item.contents" :key="i" v-if="bigImg.type === 2">
              <img :src="bigImg.picUrl" alt="">
            </div>
            <div class="index_productlist_right">
              <ul>
                <li v-for="(smallImg, i) in item.contents" :key="i" v-if="smallImg.type === 0">
                  <img :src="smallImg.picUrl" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
    name: 'HomePage',
    data() {
        return {
            banner: null,
            allList: []
        }
    },
    methods: {
        getBanner() {
            this.$axios.get("http://api.mm2018.com:8095/api/goods/home").then((res) => {
                this.banner = res.data.result[0].contents;
                // 把板块的数据存储到allList
                console.log(res.data.result)
                this.allList = res.data.result
            })
        }
    },
    created() {
        this.getBanner()
    }
}
</script>
<style scoped>
.homepage {
  background-color: #ffffff;
}

/* 主页面信息 */
.main{
  display: flex;
  justify-content: center;
  width: 100%;
}
/* 左右大图 */
.index_productlist_container{
  display: flex;
  justify-content: space-between;
}

/* 左边大图 */
.index_productlist_left{
  flex: 0 1 49%;
}
.index_productlist_left img{
  max-width: 100%;
}
/* 右边四宫格小图片 */
.index_productlist_right {
  width: 585px;
}

.index_productlist_right ul {
  display:flex;
   flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row; 
}

.index_productlist_right ul li {
  
  flex: 0 1 calc(50% - 10px); 
  margin-bottom: 10px; 
}

.index_productlist_right ul img {
  max-width: 100%;
}
/* 横排3图片 */
.ad_product_main ul{
  display: flex;
  justify-content: center;
}
.index_hot_main ul{
  display: flex;
  justify-content: space-between;
}
/* title绿色标题 */
.index_hot_menu {
  width: 1140px;
  height: 40px;
  background: #348408;
  margin-top: 50px;
  line-height: 40px;
  color: #fff;
  text-indent: 20px;
}
</style>
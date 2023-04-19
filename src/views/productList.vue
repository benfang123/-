<template>
    <div>
        <div class="content">
            <div class="index_hot">
                <div class="index_hot_menu">
                    <span :class="{ active: isactive == 0 }" @click="sortBtn(0)">综合排序</span>
                    <span :class="{ active: isactive == 1 }" @click="sortBtn(1)">价格由高到底</span>
                    <span :class="{ active: isactive == 2 }" @click="sortBtn(2)"> 价格由低到高</span>
                    <em>
                        <input type="text" v-model="priceGt">-
                        <input type="text" v-model="priceLte">
                        <input type="button" value="价格筛选" @click="priceBtn()">
                    </em>
                </div>
                <div class="index_hot_main">
                    <ul>
                        <li v-for="(item, i) in allList" :key="i">
                            <img :src="item.productImageUrl" alt="" @click="toLink(item.productId)">
                            <p>{{ item.productName }}</p>
                            <p>{{ item.salePrice }}元</p>
                        </li>
                    </ul>
                </div>
                <div class="paging">
                    <el-pagination background layout="prev, pager, next" :total="12"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="page"
                    :page-sizes="[3,6,9,12]"
                    :page-size="size"
                >
                </el-pagination>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            allList: [],
            // 动态获取请求参数
            page: 1,
            size: 6,
            sort: null,
            priceGt: null,
            priceLte: null,
            // 判断样式
            isactive: null,
            total:0
        }
    },
    methods: {
        load() {
            // 滚动加载
            console.log(this.loadLength)
            if (this.length > 0) {
                this.page = this.page + 1;
                console.log("load执行")
                this.getAll()
            }
        },
        getAll() {
            this.$axios({
                methods: 'get',
                url: `http://api.mm2018.com:8095/api/goods/allGoods?page=${this.page}&size=${this.size}&sort=${this.sort}&priceGt=${this.priceGt}&priceLte=${this.priceLte}`
            }).then(res => {
                console.log(res)
                this.allList = res.data.data
            })
        },
        // 触发后修改data中判断样式的值，并且触发获取数据
        sortBtn(value) {
            this.isactive = value;
            switch (value) {
                case 0:
                    this.sort = null//默认排序
                    this.getAll()
                    break;
                case 1:
                    this.sort = 1//从低到高
                    this.getAll()
                    break;
                case 2:
                    this.sort = -1//从高到低
                    this.getAll();
                    break;
                default:
                    console.log(value)
                    console.log("出现错误请检查判断逻辑代码")
                    break;
            }
        },
        priceBtn() {
            if (this.priceLte > this.priceGt) {
                this.getAll()
                console.log("调用了")
            } else {
                alert("请正确输入价格。")
            }
        },
        // 每页调用几个
        handleSizeChange(value){
            this.size=value;
            this.getAll();
        },
        // 第几页
        handleCurrentChange(value){
            this.page=value;
            this.getAll();
        },
        // 点击后打开详细图片
        toLink(pid){
            this.$router.push({
                path:`detail?productid=${pid}`
            })
        }
    },
    mounted() {
        this.getAll()
    }
}
</script>
<style scoped>
/* 点击会变色 */
.active {
    color: #3333;
}

.content {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.index_hot {
    width: 71rem;
}

.index_hot_menu {
    width: 100%;
    height: 40px;
    background: #348408;
    margin-top: 50px;
    line-height: 40px;
    color: #fff;
    display: flex;
    justify-content: space-around;
}

.index_hot_menu em input {
    margin: 0 10px 0 10px;
}

.index_hot_main {
    width: 100%;
}

.index_hot_main ul {
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
    padding-top: 50px;
}

.index_hot_main ul li {
    flex: 0 1 33%;
}

.index_hot_main ul li img {
    max-width: 100%;
    width: 360px;
    height: 268px;
}

/* 产品信息描述 */
.index_hot_main ul li p {
    text-align: center;
    line-height: 30px;
    margin: 0px;
    padding: 0px;
    padding-top: 20px;
}
/* 分页 */
.paging{
    display: flex;
    justify-content: center;
}

</style>
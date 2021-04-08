<template>
    <div>
        <div class="pageMain">
            <van-cell-group class="contentBox">
                <van-cell v-for="(index,item) in 10" :key="index" :title="'白木风2020年'+(index)+'月工资表'" is-link :to="'/wagesDetails/'+item">
                    <template>
                        <div v-if="index % 2 == 1" class="rightValueB">
                        已发放
                        </div>
                        <div v-else class="rightValueY">
                        待发放
                        </div>
                        
                    </template>
                </van-cell>
                
            </van-cell-group>
            
            
        </div>
    </div>
</template>

<script>
    export default {
        name:'Wages'
    }
</script>

<style lang="less" scoped>
.van-cell__title{
    display: inline-table;
}
</style>
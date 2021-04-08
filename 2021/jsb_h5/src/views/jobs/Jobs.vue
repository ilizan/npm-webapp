<template>
    <div>
        <div class="pageMain">
            <van-cell-group class="contentBox" v-for="(index,item) in 10" :key="index">
                <van-cell title="林家庄城中村改造开发三期">
                    <template #label>
                        <div class="infos">
                            <div>水电工1组</div>
                            <div class="lefts">
                                职务：班组长
                            </div>
                            <div class="rights">
                                2021年03月22日——2021年03月22日
                            </div>
                        </div>
                    </template>
                </van-cell>

            </van-cell-group>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.infos{
    line-height: 22px;
    .lefts{
        float: left;
    }
    .rights{
        float: right;
    }
}
</style>
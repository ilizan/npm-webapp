<template>
    <div class="workeranalysis">
        <div class="addCount">
            本月新增实名制（人）：
            <label for="">
            21360</label>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
.workeranalysis{
    .addCount{
        color: #5BDBF6;
        border-radius: 5px;
        width: 430px;
        margin: 20px auto 0;
        padding: 0 10px;
        line-height: 45px;
        font-size: 18px;
        border:1px solid #5BDBF6;
        text-align: center;
        box-shadow: inset 0 0 10px #5BDBF6;
        label{
                font-size: 27px;
    color: #00FAA8;
    font-weight: 900;
        }
    }
}
</style>
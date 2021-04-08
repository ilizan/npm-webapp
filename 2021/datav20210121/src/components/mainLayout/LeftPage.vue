<template>
    <div class="leftPage">
        <div class="hei40">
            <LeftTop></LeftTop>
        </div>
        <div class="hei60">
        <LeftBelow></LeftBelow>
        </div>
    </div>
</template>

<script>
import LeftTop from './left/LeftTop';
import LeftBelow from './left/LeftBelow';
    export default {
        components: {
            LeftTop,
            LeftBelow
        },
    }
</script>

<style lang="scss" scoped>
.leftPage{
    .hei40{
        height: 344px;
        width: 532px;
        background-image: url('./../../assets/images/box1.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .hei60{
        height: 514px;
        width: 532px;
        margin-top: 50px;
        background-image: url('./../../assets/images/box2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
}
</style>
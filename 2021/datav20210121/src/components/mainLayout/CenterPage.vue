<template>
    <div class="centerPage">
        <div class="selectTag">
            <SelectPage></SelectPage>
        </div>
        <div class="map">
            <VMap></VMap>
        </div>
        <div class="centerBelow">
            <CenterBelow></CenterBelow>
        </div>
    </div>
</template>

<script>
import SelectPage from '@/components/mainLayout/center/SelectPage';
import VMap from '@/components/mainLayout/center/VMap';
import CenterBelow from './center/CenterBelow';
    export default {
        components: {
            SelectPage,
            VMap,
            CenterBelow
        },
    }
</script>

<style lang="scss" scoped>
.centerPage{
    .selectTag{
        height: 40px;
    }
    .map{
        height: 449px;
        width: 686px;
        margin: 0 auto;
    }
    .centerBelow{
        height: 416px;
        width: 686px;
        background-image: url('./../../assets/images/box3.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
    }
}
</style>
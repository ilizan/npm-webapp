<template>
    <div class="main">
        <VHeader></VHeader>
        <section class="lefts">
            <LeftPage></LeftPage>
        </section>
        <section class="centers">
            <CenterPage></CenterPage>
        </section>
        <section class="rights">
            <RightPage></RightPage>
        </section>
        
    </div>
</template>

<script>
import VHeader from '@/components/VHeader.vue';
import LeftPage from '@/components/mainLayout/LeftPage.vue';
import CenterPage from '@/components/mainLayout/CenterPage.vue';
import RightPage from '@/components/mainLayout/RightPage.vue';

    export default {
        components: {
            VHeader,
            LeftPage,
            CenterPage,
            RightPage
        },
    }
</script>

<style lang="scss" scoped>
.main *{
    // border:1px solid #ccc
}
.main{
    color: #FFF;
    height: calc(100% - 10px);
    width: 1890px;
    // height: 1080px;
    margin: 0 auto;
    padding-top: 10px;
    position: relative;
    .lefts,.centers,.rights{
        // height: calc(100% - 118px);
        float: left;
    }
    .lefts{
        width: 29%;
    }
    .centers{
        width: 40%;
    }
    .rights{
        width: 30%;
    }
}
</style>
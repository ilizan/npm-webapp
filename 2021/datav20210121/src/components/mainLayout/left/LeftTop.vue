<template>
    <div class="leftTop">
        <div class="boxTitle">
            <ul>
                <li v-bind:class="{ active: isActive==1 }" @click="isActive = 1">实名制</li>
                <li v-bind:class="{ active: isActive==2 }" @click="isActive = 2">用工分析</li>
            </ul>
        </div>
        <div class="boxMain">
            <Realname v-show="isActive == 1"></Realname>
            <Workeranalysis v-show="isActive == 2"></Workeranalysis>
        </div>
    </div>
</template>

<script>
import Realname from './Realname';
import Workeranalysis from './Workeranalysis';
    export default {
        data() {
            return {
                isActive: 1
            }
        },
        components: {
            Realname,
            Workeranalysis
        },
    }
</script>

<style lang="scss" scoped>
.leftTop{

}
</style>
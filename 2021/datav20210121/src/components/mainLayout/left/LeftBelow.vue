<template>
    <div>
        <div class="boxTitle">
            <ul>
                <li v-bind:class="{ active: isActive==1 }" @click="isActive = 1">银行代发</li>
                <li v-bind:class="{ active: isActive==2 }" @click="isActive = 2">工资专户</li>
            </ul>
        </div>
        <div class="boxMain">
            <Bank v-show="isActive == 1"></Bank>
            <Wages v-show="isActive == 2"></Wages>
        </div>
    </div>
</template>

<script>
import Bank from './Bank';
import Wages from './Wages';
    export default {
        data() {
            return {
                isActive: 1
            }
        },
        components: {
            Bank,
            Wages
        },
    }
</script>

<style lang="scss" scoped>

</style>
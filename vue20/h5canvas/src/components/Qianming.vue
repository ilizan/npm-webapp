<template>
    <div class="main">
        <van-popup v-model="show" :close-on-click-overlay='false' round>
            <div class="all">
                签字区：
                <div id="canvas" ref="canvas"></div>
                预览：
                <div class="mySign">
                    <img :src="signSrc" alt="">
                </div>
            </div>
            <van-row>
                <van-col span="12">
                    <van-button type="info" block ref="saveCanvas">确定</van-button>
                </van-col>
                <van-col span="12">
                    <van-button type="default" block ref="clearCanvas">取消</van-button>
                </van-col>
            </van-row>
            
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            signSrc:'',
            show: false
        }
    },
    created() {

    },
    mounted() {
    
    },
    methods: {
        inits(){
            this.show = true;
            this.$nextTick(()=>{
                this.lineCanvas({
                    el: this.$refs.canvas,//绘制canvas的父级div
                    clearEl:  this.$refs.clearCanvas,//清除按钮
                    saveEl:  this.$refs.saveCanvas,//保存按钮
                });
            });
            
        },
        lineCanvas(obj) {
            console.log(obj)
            this.linewidth = 2;
            this.color = "#000000";
            this.background = "#ffffff";
            for (var i in obj) {
                this[i] = obj[i];
            };
            this.canvas = document.createElement("canvas");
            this.el.appendChild(this.canvas);
            this.cxt = this.canvas.getContext("2d");
            this.canvas.width = this.el.clientWidth;
            this.canvas.height = this.el.clientHeight;
            this.cxt.fillStyle = this.background;
            this.cxt.fillRect(0, 0, this.canvas.width, this.canvas.width);
            this.cxt.strokeStyle = this.color;
            this.cxt.lineWidth = this.linewidth;
            this.cxt.lineCap = "round";
            //开始绘制
            this.canvas.addEventListener("touchstart", function(e) {
                // console.log('开始绘制')
                this.cxt.beginPath();
                // this.cxt.moveTo(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            }.bind(this), false);
            //绘制中
            this.canvas.addEventListener("touchmove", function(e) {
                // console.log('绘制中')
                var bbox = this.canvas.getBoundingClientRect();
                this.cxt.lineTo(e.changedTouches[0].pageX-bbox.x, e.changedTouches[0].pageY-bbox.y);
                this.cxt.stroke();
            }.bind(this), false);
            //结束绘制
            this.canvas.addEventListener("touchend", function() {
                // console.log('结束绘制')
                this.cxt.closePath();
                let imgBase64 = this.canvas.toDataURL();
                //console.log(imgBase64);
                this.signSrc= imgBase64;
                // this.isSign= true;
            }.bind(this), false);
            //清除画布
            this.clearEl.addEventListener("click", function() {
                // console.log('清除画布')
                // this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.show = false
            }.bind(this), false);
            //保存图片，直接转base64
            this.saveEl.addEventListener("click", function() {
                // console.log('保存图片')
                let imgBase64 = this.canvas.toDataURL();
                // alert(imgBase64);
                this.signSrc= imgBase64;
            }.bind(this), false);
        }
    },
    destroyed() {
        console.log('111')
    },
}
</script>

<style scoped lang="less">
.main{
    // height: 100%;
    // width: 100%;
    // position: absolute;
    // overflow: hidden;
    .all{
        padding: 20px;
        text-align: left;
        #canvas{
            width: 100%;
            margin: 0 auto;
            height: 200px;
            position: relative;
            border: 1px solid #ccc;
            canvas{
                display: block;
                width: 100%;
            }
        }
        #clearCanvas{
            border: 1px solid #DEDEDE;
            z-index: 1;
        }
        #saveCanvas{
            border: 1px solid #DEDEDE;
            z-index: 1;
        }
        .mySign{
            width: 100%;
            height: 90px;
            border: 1px solid #ccc;
            img{
                width: 100%;
                margin: 0 auto;
                height: 90px;
            }
        }
        .test{
            width: 100%;
            height:200px;
            font-size:14px;
            font-weight:600;
            text-align:center;
            
        }
    }
}
</style>
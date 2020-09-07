<template>
    <div class="main">
        <div id="canvas" ref="canvas"></div>
        <div>
            <p id="clearCanvas" ref="clearCanvas">清除</p>
            <p id="saveCanvas" ref="saveCanvas">保存</p>
        </div>
        <div class="mySign" v-show="isSign">
            <img :src="signSrc" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSign: false,
            signSrc:''
        }
    },
    created() {

    },
    mounted() {
       this.lineCanvas({
            el: this.$refs.canvas,//绘制canvas的父级div
            clearEl:  this.$refs.clearCanvas,//清除按钮
            saveEl:  this.$refs.saveCanvas,//保存按钮
        });
    },
    methods: {
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
                // this.signSrc= imgBase64;
                // this.isSign= true;
            }.bind(this), false);
            //清除画布
            this.clearEl.addEventListener("click", function() {
                // console.log('清除画布')
                this.cxt.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }.bind(this), false);
            //保存图片，直接转base64
            this.saveEl.addEventListener("click", function() {
                // console.log('保存图片')
                let imgBase64 = this.canvas.toDataURL();
                // alert(imgBase64);
                this.signSrc= imgBase64;
                this.isSign= true;
            }.bind(this), false);
        }
    }
}
</script>

<style scoped lang="less">
.main{
    // height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    #canvas{
        width: 90%;
        margin: 0 auto;
        height: 200px;
        margin-top: 20px;
        position: relative;
        border: 1px solid #ccc;
        canvas{
            display: block;
            
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
        height: 100px;
        img{
            width: 80%;
            margin: 0 auto;
            border: 1px solid #ccc;
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
</style>
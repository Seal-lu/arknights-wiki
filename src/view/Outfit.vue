<template>
    <div class="outfit">
        <div class="outfit_left">
            <!-- 三角背景 -->
            <div class="top_left"></div>
            <div class="top_right"></div>
            <!-- 半身像和头像 -->
            <div>
                <div class="header">
                    <div>
                        <img :src="target.half" alt="">
                    </div>
                </div>
                <div class="half">
                    <div>
                        <img :src="target.half" alt="">
                    </div>
                </div>
                <!-- info -->
                <div class="info">
                    <p id="title">{{outfit.logoName}}</p>
                    <p id="new">NEW APPIVAL</p>
                    <div class="witer">
                        <p><i class="el-icon-user"></i></p>
                        <p><i class="el-icon-edit"></i></p>
                    </div>
                    <p id="description">{{target.description}}</p>
                </div>
            </div>
            <img :src="outfit.logo" alt="" class="logo">
            <img :src="target.outfit" alt="" class="target">
        </div>
        <div class="outfit_right">
            <div class="logoName">
                <div>
                    <p>#OUTFIT OF THE DAY</p>
                    <p>{{outfit.type}}</p>
                </div>
                <div></div>
            </div>
            <div class="swiper">
                <el-carousel 
                    type="card" 
                    height="280px" 
                    :autoplay='false' 
                    arrow='never'
                    :initial-index='initInd'
                    indicator-position='none'
                    :loop='false'
                    @change="changeInd"
                >
                    <el-carousel-item v-for="item in outfit.current" :key="item.id">
                        <img class="medium" :src="item.half" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'outfit',
    data(){
        return{
            outfit:{},
            target:{},
            initInd:0
        }
    },
    created(){
        this.getData()
    },
    updated(){
        this.$router.replace('/outfit/'+this.target.id)
    },
    methods:{
        getData(){
            let ind = this.$route.params.targetInd
            this.outfit = this.$route.params.outfitArr
            this.target = this.outfit.current[ind],
            this.initInd = ind
            
        },
        changeInd(ind){
            this.target = this.outfit.current[ind]
        }
    }

}
</script>


<style lang="scss" scoped>
    .outfit{
        display: flex;
        background: url('../../public/img/bg_inner.3d1e0e7c.png');
        width: 100%;
        height: 92vh;
        overflow: hidden;
        .outfit_left{
            .info{
                font-size: 12px;
                padding: 5px 10px;
                box-sizing: border-box;
                top: 55%;
                z-index: 1001;
                color: white;
                width: 200px;
                position: absolute;
                right: 2%;
                background: rgb(18, 42, 18);
                #title{
                    font-weight: bold;
                    font-size: 19px;
                }
                #new{
                    background: black;
                }
                .witer{
                    margin-top: 8px;
                    background: skyblue;
                    padding: 3px;
                    box-sizing: border-box;
                }
                #description{
                    transform: scale(.9);
                }
            }
            .top_left{
                position: absolute;
                background-image: linear-gradient(159deg,rgb(71, 83, 77) 50%,rgb(0, 0, 0,0) 50%);
                top: 0%;
                width: 60%;
                height: 30%;
                z-index: 99;
            }
            .top_right{
                right: 0%;
                position: absolute;
                z-index: 0;
                background-image: linear-gradient(-170deg,rgb(163, 159, 159) 50%,rgb(0, 0, 0,0) 50%);
                top: 0%;
                width: 60%;
                height: 28%;
            }
            .header{
                transform: scale(.7);
                z-index: 99;
                position: absolute;
                top: 0%;
                right: 0%;
                width: 100px;
                height: 100px;
                border: 10px solid white;
                z-index: 1000;
                div{
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    width: 120px;
                    height: 120px;
                    overflow: hidden;
                }
                img{
                    position: relative;
                    width: 100%;
                }
            }
            .half{
                @extend .header;
                height: 230px;
                top: 15%;
                div{
                    top: 10px;
                    height: 100%;
                }
            }
            position: relative;
            width: 60%;
            height: 100%;
            .logo{
                position: absolute;
                top:20%;
                left: 5%;
                width: 20%;
                z-index: 999;
            }
            .target{
                z-index: 1000;
                position: relative;
                left: 10%;
                height: 100%;
            }
        }
        .outfit_right{
            display: flex;
            flex-direction: column;
            color: white;
            width: 40%;
            height: 100%;
            .logoName{
                margin: 0% auto;
                width: 140px;
                div:first-child{
                    background: green;
                    height: 50px;
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    align-items: center;
                    :first-child{
                        text-align: center;
                        white-space: nowrap;
                        font-size: 12px;
                        transform: scale(.6);
                    }
                }
            }
            .swiper{
                width: 100%;
            }
        }
    }
</style>
<style lang="scss">
    .el-carousel{
        width: 60%;
        margin: 0% auto;
    }
    .el-carousel__item{
        background: black;
        width: 140px;
        height: 100%;
        img{
            height: 100%;
        }
    }

</style>
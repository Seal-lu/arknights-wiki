<template>
  <div class="outfitsPage">
    <!-- TODO:抽离组件 -->
    <!-- 第一层循环本次时装类型 -->
    <div class="outfit" v-for="item,index in outfits" :key="item.type">
        <div class="time">{{ item.time }}</div>
        <!-- 第二次循环本次时装内干员 -->
        <div class="operatorBox">
            <div
                v-for="operators,targerInd in item.current"
                :key="operators.id"
                class="shower"
                @click="toOutfit(operators.id,index,targerInd)"
            >
                <img class="half" :src="operators.half" alt=""/>
                
                <div class="png-drop">
                    <img id="logo" :src="item.logo" alt="" />
                </div>
                <div class="logo">
                    <p>{{ operators.name }}</p>
                    <p>{{ item.logoName }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "outfitsPage",
  data() {
    return {
      outfits: [],
    };
  },
  created() {
    this.$http('/api/outfits')
    .then(res=>{
        this.outfits = res
    })
  },
  methods:{
      toOutfit(id,ind,targerInd){
        this.$router.push({
            name:'Outfit',
            params:{
                id,
                outfitArr:this.outfits[ind],
                targetInd:targerInd
            }
        })
      }
  }
};
</script>

<style lang="scss" scoped>
.outfitsPage {
    background: url('../../public/img/bg_inner.3d1e0e7c.png');
    padding: 10px 30px;
    box-sizing: border-box;
    min-height: 92vh;
    .outfit {
        display: flex;
        flex-direction: column;
        .shower {
            cursor: pointer;
            position: relative;
            background: white;
            overflow: hidden;
            width: 120px;
            margin-right: 15px;
            .half {
                // 必须设置为relative,否则z-index不生效
                position: relative;
                width: 100%;
                z-index: 999;
            }
            .png-drop {
                position: absolute;
                display: inline-block;
                top: 8%;
                left: -8%;
                z-index: 0;
                #logo {
                    width: 100%;
                    transform: translateX(-100%);
                    filter: drop-shadow(120px 0 #000);
                }
            }
            .logo {
                margin-top: -3.9%;
                background: white;
                p{
                    transform: scale(0.85);
                }
                box-sizing: border-box;
                font-weight: bold;
                :last-child {
                    line-height: 25px;
                    height: 25px;
                    white-space: nowrap;
                    font-size: 10px;
                    color: gray;
                }
            }
        }
        .time {
            margin: 10px 0px;
            text-align: right;
            padding: 0px 10px;
            color: black;
            font-weight: bold;
            width: 100%;
            right: 0%;
            height: 30px;
            line-height: 30px;
            background-image: linear-gradient(135deg,rgba(255, 255, 255, 0) 65%,rgb(255, 255, 255) 35%);
        }
        .operatorBox{
            display: flex;
        }
    }
}
</style>
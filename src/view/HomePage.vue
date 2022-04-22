<template>
  <div class="content" @mousewheel="changeEvent">
    <div class="back_word">
      <div class="Top_word"><p>ARKNIGHTS</p></div>
      <div class="Bottom_word"><p>ARKNIGHTS</p></div>
    </div>
    <div class="step">
        <el-steps direction="vertical" :active="ind" space='50px' finish-status='wait'>
            <el-step v-for="item in bannerList.length+1" :key="item" title=" "></el-step>
        </el-steps>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default{
  name: "Home",
  data() {
    return {
      bannerList: ["one", "tow"],
      ind: 0,
      canDoIt:true
    };
  },
  beforeCreate: function (){
    this.$store.commit("isLogin");
  },
  methods: {
    test(i) {
      console.log(this.bannerList[i]);
    },
    // 鼠标滚轮切换路由
    changeBanner(e){
        let evt = e || window.event;
        if (evt.deltaY > 0) {
            if (this.ind < this.bannerList.length) {
                this.$router.push(this.bannerList[this.ind]);
                this.ind++;
            }
        } else {
            if (this.ind > 0) {
                window.history.back();
                this.ind--;
            }
        }
        
    },
    // 防抖函数
    changeEvent(e){
      if(this.canDoIt) this.changeBanner(e)
      this.canDoIt = false
      setTimeout(()=>{
          this.canDoIt = true
      },500)
    }
  }
};

</script>

<style lang="scss" scoped>
    .content{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 92vh;
        background: orange;
        background-image: radial-gradient(#00000021 1px, transparent 0);
        background-size: 0.1563rem 0.1563rem;
        background-position: -0.4063rem -0.0938rem; 
        .back_word {
            position: absolute;
            top: 25%;
            left: 25%;
            filter: brightness(0.8);
            .Top_word {
                height: 63px;
                overflow: hidden;
                color: white;
                z-index: 0;
                transform: scale(2);
                font-size: 100px;
                font-weight: bold;
            }
            .Bottom_word {
                @extend .Top_word;
                position: relative;
                left: 1.5%;
                margin-top: 75px;
                p {
                  color: orange;
                  margin-top: -65px;
                }
            }
        }
        .step{
            position: absolute;
            bottom: 0%;
            right: 2%;
        }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.3s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
</style>
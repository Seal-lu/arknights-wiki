<template>
  <div class="role">
    <i class="el-icon-refresh" @click="changeUrl"></i>
    <i class="el-icon-sort-down" @click="toOperators"></i>
    <transition-group name="el-fade-in">
      <img v-show="isExpCover" :src="role.expCover" alt="" key="1">
      <img v-show="!isExpCover" :src="role.coverUrl" alt="" key="2">
    </transition-group>
    <transition-group name="el-fade-in">
      <img class="backRole" v-show="isExpCover" :src="role.expCover" alt="" key="1">
      <img class="backRole" v-show="!isExpCover" :src="role.coverUrl" alt="" key="2">
    </transition-group>
    <div class="infoArea">
      <p>【代号】{{role.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'Role',
    data(){
      return{
        role:{},
        isExpCover:false
      }
    },
    created(){
      this.roleData()
      // 弹出组件时禁用滚动条
      // document.documentElement.style.overflowY = 'hidden'
    },
    destroyed(){
      // 销毁组件时启用滚动条
      // document.documentElement.style.overflowY = 'scroll'
    },
    methods:{
      roleData(){
        this.role=this.$route.params.role
      },
      toOperators(){
        window.history.back()
      },
      changeUrl(){
        this.isExpCover = !this.isExpCover
      }
    }
}
</script>



<style lang="scss" scoped>
  .role{
    img{
      height: 92vh;
      position: absolute;
      bottom: 0%;
      left: 3%;
      z-index: 999;
    }
    .backRole{
      height: 150%;
      top: -10%;
      left: 25%;
      z-index: 1;
      filter: brightness(0.3);
    }
    .el-icon-refresh{
      z-index: 9999;
      cursor: pointer;
      color: white;
      position: absolute;
      font-size: 1.5625rem;
      top: 20%;
      right: 90%;
    }
    .el-icon-sort-down{
      @extend .el-icon-refresh;
      top: 15%;
      right: 5% !important;
      font-size: 2.5rem;
      transform: rotateZ(90deg);
    }
    .infoArea{
      border: 1px solid white;
      padding: 0.625rem;
      color: white;
      width: 28.125rem;
      height: 17.5rem;
      top: 25%;
      left: 45%;
      position: absolute;
      background: rgba(255, 255, 255, 0.177);
      backdrop-filter: blur(5px);
      z-index: 9999;
    }
    background: rgba(0, 0, 0, 0.366);
    backdrop-filter: blur(10px);
    position: fixed;
    bottom: 0%;
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }
</style>
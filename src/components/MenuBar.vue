<template>
<div class="menu">
    <nav class="navBar">
        <div @click="drawer = true" class="Menu"><i class="el-icon-menu"></i><span>Menu</span></div>
        <el-input
            class="search"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            clearable
            size='mini'
            v-model="inputVal">
        </el-input>
        <div class="login" v-if="!$store.state.isLogin" @click="showLogin = true">Log in</div>
        <div class="logined" v-if="$store.state.isLogin">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-avatar :size="30"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item ><span @click="logOut">登出</span> </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            
        </div>
    </nav>
    <!-- 侧边栏 懒得抽成组件了 -->
    <el-drawer
       
        title="FLOT"
        :visible.sync="drawer"
        :direction="direction"
        :size=200
        :before-close="handleClose">
        <el-menu 
            default-active='/'
            active-text-color="#FFA500" 
            router 
            class="col-menu" 
        >
            <el-menu-item v-for="item in routerList"
                :key="item.ind" 
                :index='item.path'
            >
                <span>{{item.title}}</span>
                <i class="el-icon-arrow-right"></i>
            </el-menu-item>
        </el-menu>
</el-drawer>
    <!-- 登录 懒得抽成组件了 -->
    <el-dialog
        class="loginBox" 
        :visible.sync="showLogin"
        width='300px'
        :show-close=false
        center
        title="请输入您的身份信息"
    >
        <el-form
            label-width='50px'
            v-show="!showResige"
        >
            <el-form-item label='账号'>
                <el-input size='mini' v-model="account"></el-input>
            </el-form-item>
            <el-form-item label='密码'>
                <el-input type='password' size='mini' v-model="password"></el-input>
            </el-form-item>
            <el-button type='text' class="register" size='mini' @click="toRegister">注册账号</el-button>
            <el-button class="loginBtn" @click="login">LOGIN</el-button>
        </el-form>
        <!-- 注册 -->
        <el-form
            v-show="showResige"
        >
            <el-form-item>
                <el-input size='mini' v-model="account" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input type='password' size='mini' v-model="password" placeholder="请输入密码"></el-input>
                <el-input type='password' size='mini' v-model="rePwd" placeholder="请确认密码"></el-input>
            </el-form-item>
            <el-button type='text' class="tologin" size='mini'>返回登录</el-button>
            <el-button class="rigesterBtn">REGISTER</el-button>
        </el-form>
    </el-dialog>
</div>
</template>

<script>
export default {
    name:'MenuBar',
    data(){
        return{
            drawer: false,
            inputVal:'',
            direction: 'ltr',
            showLogin:false,
            showResige:false,
            account:'',
            password:'',
            rePwd:'',
            routerList:[
                {path:'/',title:'首页',ind:0},
                {path:'/operators',title:'干员图鉴',ind:1},
                {path:'/outfits',title:'时装回廊',ind:2},
                {path:'/carry',title:'官方新闻',ind:3},
                {path:'/other',title:'其他链接',ind:4},
                {path:'/about',title:'关于本站',ind:5},
            ]
        }
    },
    
    methods: {
      handleClose(done) {
        done();
      },
      login(){
          let user={
              name:'testing',
              key:new Date().getDate(),
              account:this.account,
              pwd:this.password
          }
          localStorage.setItem('user',JSON.stringify(user))
          this.showLogin = false
          this.$store.commit('isLogin')
          this.account = ''
          this.password = ''
      },
      logOut(){
          localStorage.clear()
          this.$store.commit('isLogin')
      },
      toRegister(){
          this.showResige = true
      }
    }
}
</script>

<style lang="scss">
    .navBar{
        div{
            cursor: pointer;
        };
        .search{
            width: 40%;
            z-index: 999;
            background: none;
        }
        i{
            margin-right: 5px
        };
        .Menu{
            z-index: 99;
        }
        .login{
            font-size: 15px;
            border: 2px solid white;
            border-radius: 5px;
            padding:0px 10px;
            height: 25px;
            line-height: 25px;
            z-index: 999;
        };
        .logined{
            display: flex;
            font-size: 12px;
            align-items: center;
            z-index: 999;
        }
        padding: 0% 40px;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: black;
        height: 8vh;
    }
    .el-col{
        width: 100% !important;
    }
    .register{
        position: absolute;
        right: 6%;
        top: 65%;
        font-size: 12px;
        color: gray;
    }
    .tologin{
        @extend .register;
        top:70%
    }
    .loginBtn{
        width: 100%;
        font-weight: bold;
        color: white;
        font-size: 20px;
        background: #00000050;
    }
    .rigesterBtn{
        @extend .loginBtn;
        position: relative;
        right: 4%;
    }
</style>
<style>
    .loginBox .el-dialog__body{
        justify-content: space-between;
        padding: 10px 20px;
        background: rgb(255, 255, 254);
        background-image: radial-gradient(#00000021 1px, transparent 0);
        background-size: 0.1563rem 0.1563rem;
    }
    .loginBox .el-dialog__header{
        background: black;
    }
    .loginBox .el-dialog__title{
        color: white;
        font-weight: bold;
        letter-spacing: 2px;
    }
</style>
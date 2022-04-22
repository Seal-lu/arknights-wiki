<template>
    <div class="operators">
        <h1 class="title">干员图鉴</h1>
        <div class="roleList">
            <div class="role" v-for="item,index in roles" :key="item.name" 
                :style="{
                    background:'url('+item.coverUrl+')',
                    backgroundPosition:'50% 0%',
                    backgroundSize:'300%'
                }"
                @click="toInfo(item.id,index)"
            >
                <div class="roleInfo">
                    <p class="name">{{item.name}}</p>
                    <p class="power">{{item.power}}</p>
                    <div class="more">
                        更多信息
                        <i class="el-icon-right"></i>
                    </div>
                </div>
            </div>
        </div>
        <transition name="el-fade-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
    name:'Operators',
    data(){
        return{
            roles:[]
        }
    },
    created(){
        this.$http('/api/operators')
        .then(res=>{
            this.roles = res
            console.log(res);
        })
        // this.roles = this.$store.state.rolesList;
    },
    methods:{
        toInfo(id,ind){
            this.$router.push({
                name:'Role',
                params:{
                    id,
                    role:this.roles[ind]
                }
            })
        }
        
    }
})
</script>


<style lang="scss" scoped>
    .operators{
        width: 100%;
        min-height: 92vh;
        background: url('../../public/img/bg_inner.3d1e0e7c.png');
        .title{
            letter-spacing: 10px;
            line-height: 100px;
            text-align: center;
            color: white;
        }
        .roleList{
            padding: 0% 8%;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            .role{
                cursor: pointer;
                position: relative;
                margin-bottom: 50px;
                width: 150px;
                height: 300px;
                .roleInfo{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    width: 100%;
                    height: 50px;
                    border-top: 3px solid orange;
                    background: rgba(0, 0, 0, 0.905);
                    position: absolute;
                    bottom: 0%;
                    color: white;
                        overflow:hidden;
                    .power{
                        font-size: 12px;
                    }
                    .more{
                        font-size: 14px;
                        width: 100%;
                        text-align: center;
                        height:0px;
                        background: orange;
                        color: white;
                    }
                }
            }
            .role:hover{
                transform: scale(1.2);
                transition: .3s;
                .roleInfo{
                    height: 80px;
                    font-size: 16px;
                    transition: .3s;
                }
                .more{
                    height: 30px;
                    line-height: 30px;
                    transition: .3s;
                }
            }
        }
    }
</style>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
    height: 45px;
    margin-bottom: 0px;
    position: fixed;
    width: 100%;
  }
  .layout-ceiling-main{
    float: right;
    margin-right: 15px;
    position: fixed;
    width: 100%;
    margin-bottom: 15px;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-content{
    min-height: 200px;
    overflow: hidden;
    border-radius: 4px;
    height: 100%;
    margin-top: 45px;
  }
  .custom-content-left{
    position: fixed;
    height: 100%;
    background: #464c5b;
    overflow: auto;
  }
  .custom-content-right{
    margin-left: 18%;
    margin-top: 15px;
    margin-bottom: 20px;
    width: 80%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    min-height: 680px;
  }
  .custom-top-menu{
    float: right;
    margin-right: 10px;
    font-size: 15px;
  }
  .custom-top-menu.right{
    margin-right: 30px;
  }
  .custom-top-menu-logo{
    float: left;
    margin-left: 47%;
    font-size: 20px;
  }
  .route-a{
    color:white;
  }
  .custom-left-menu{
    padding: 0px;
  }
  .router-link-active{
    color:deepskyblue !important;
  }
</style>
<template>
  <div class="layout">
    <div class="layout-ceiling" style="z-index: 2000;">
      <div class="layout-ceiling-main">
        <a href="#" class="custom-top-menu-logo">Api接口文档</a>
      </div>
    </div>
    <div class="layout-content">
      <Row>
        <i-col span="4" class="custom-content-left">
          <Menu active-name="1-2" theme="dark" width="auto" :open-names="['2']">
            <div class="layout-logo-left"></div>
            <Submenu  name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                文档管理
            </template>
              <router-link  to="/edit" class="route-a ivu-menu-item">新增接口</router-link>
              <router-link  to="/editModule" class="route-a ivu-menu-item">新增模块</router-link>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                API文档
            </template>
              <router-link v-for="menu in menuList" v-on:click="activeChange" v-bind:to="'/apilist/'+menu.Id" class="route-a ivu-menu-item">{{menu.Name}}</router-link>
            </Submenu>
          </Menu>
        </i-col>
        <i-col span="20" class="custom-content-right">
          <router-view></router-view>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                menuList: [],
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            show (id) {
                this.$router.push('/detail/'+id);
            },
            edit (id) {
                this.$router.push('/edit/'+id);
            },
            remove (id) {
            },
            fetchData (){
                this.$http.get(this.ServerPath+'api/ApiDoc/Document/GetApiData').then(response => {
                    this.menuList = response.body;
                }, response => {
                });
            },
            activeChange(){

            }
        }
    }
</script>
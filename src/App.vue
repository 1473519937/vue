<template>

  <div id="app">

    <div class="main-content">
      <router-view/>
    </div>
    
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab1">
        <!-- <img slot="icon" src="./assets/logo.png"> -->
        <span slot="icon" class="iconfont icon-yingyong"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <span slot="icon" class="iconfont icon-jiaoyuhangye"></span>
        课程中心
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <span slot="icon" class="iconfont icon-dingdan"></span>
        学习任务
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <span slot="icon" class="iconfont icon-yonghu"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>

    

  </div>

</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: "tab1"
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

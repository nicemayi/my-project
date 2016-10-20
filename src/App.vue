<template>
  <div id="app">

              <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项11</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>







<element-datepicker>adsadsa</element-datepicker>
    <template>
  <el-tabs>
    <el-tab-pane label="用户管理"></el-tab-pane>
    <el-tab-pane label="配置管理"></el-tab-pane>
    <el-tab-pane label="角色管理"></el-tab-pane>
    <el-tab-pane label="定时任务补偿"></el-tab-pane>
  </el-tabs>
</template>
    <img src="./assets/logo.png">
    <hello></hello>
    <element-table></element-table>
    <el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
     <element-layout>adas</element-layout>
     <el-time-select
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>

  </div>
</template>

<script>
import Hello from './components/Hello'
import ElementSelect from './components/ElementSelect'
import ElementTable from './components/ElementTable'
import ElementLayout from './components/ElementLayout'
import ElementDatepicker from './components/ElementDatepicker'
export default {
  name: 'app',
  components: {
    Hello,
    ElementSelect,
    ElementTable,
    ElementLayout,
    ElementDatepicker
  }
}
</script>

<style lang="css">

  /*@import '../node_modules/highlight.js/styles/color-brewer.css';*/
/*  @import 'assets/styles/common.css';
  @import 'assets/styles/fonts/style.css';*/

#app {




  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    height: 100%;
  }

  body {
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    overflow: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: #4078c0;
    text-decoration: none;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  .hljs {
    line-height: 1.8;
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
    font-size: 12px;
    padding: 18px 24px;
    background-color: #f9fafc;
    border: solid 1px #eaeefb;
    margin-bottom: 25px;
    border-radius: 2px;
    -webkit-font-smoothing: auto;
  }

  .main-cnt {
    margin-top: -80px;
    padding: 80px 0 120px;
    box-sizing: border-box;
    min-height: 100%;
  }

  .container,
  .page-container {
    width: 1140px;
    margin: 0 auto;
  }

  .page-container {
    padding-top: 55px;

    h2 {
      font-size: 28px;
      color: #1f2d3d;
      margin: 0;
    }
    h3 {
      font-size: 22px;
    }
    h2, h3, h4, h5 {
      font-weight: normal;
      color: #1f2f3d;
    }
    p {
      font-size: 14px;
      color: #5e6d82;
    }
  }
  .demo {
    margin: 20px 0;
  }
  @media (max-width: 1140px) {
    .container,
    .page-container {
      width: 100%;
    }
  }

}
</style>

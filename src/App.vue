<template>
  <div id="app">
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">Sign up</a> |
                <a href="#">Help Center</a> |
                <a href="#">Security</a> |
                <a href="#">Service</a>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo"></div>
        </div>
        <div class="layout-body">
          <router-view/>
        </div>
        <div class="layout-copy">
          <div class="layout-copy-info">2011-2016 &copy; TalkingData</div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-header{
        height: 7%;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-body {
      height: 83%;
    }
    .layout-copy{
        text-align: center;
        height: 5%;
        color: #9ea7b4;
        position: relative;
    }
    .layout-copy-info {
      position: absolute;
      top: 30%;
      left: 45%;
    }
    .layout-ceiling{
        background: #464c5b;
        height: 5%;
        overflow: hidden;
        position: relative;
    }
    .layout-ceiling-main{
        position: absolute;
        right: 8%;
        top: 32%;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>

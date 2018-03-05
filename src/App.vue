<template>
  <div id="app">
    <div class="layout" v-if="login">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">欢迎你</a> |
                <a href="#">{{data.name}}</a> |
                <a href="#">退出</a> |
                <a href="#">帮助中心</a> 
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo"></div>
        </div>
        <div class="layout-body" v-if="login">
            <Row>
                <Col span="3" class="leftmenu">
                  <Menu :theme="theme2" active-name="1-1">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="home"></Icon>
                            首页
                        </template>
                        <router-link to="/" ><MenuItem name="1-1">首页</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            数据管理
                        </template>
                        <MenuGroup title="租">
                            <router-link to="/rent" ><MenuItem name="3-1">待租套房</MenuItem></router-link>
                            <router-link to="/rentsingle"><MenuItem name="3-2">待租单间</MenuItem></router-link>
                            <router-link to="/rented"><MenuItem name="3-3">已租套房</MenuItem></router-link>
                            <router-link to="/rentedsingle"><MenuItem name="3-4">已租单间</MenuItem></router-link>
                        </MenuGroup>
                        <MenuGroup title="售">
                            <router-link to="/sell" ><MenuItem name="3-7">已售</MenuItem></router-link>
                            <router-link to="/waitsell"><MenuItem name="3-5">待售</MenuItem></router-link>
                        </MenuGroup>
                        <MenuGroup title="销">
                            <router-link to="/member" ><MenuItem name="3-6">经纪人</MenuItem></router-link>
                        </MenuGroup>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="plus-round"></Icon>
                            添加数据
                        </template>
                        <router-link to="/add" ><MenuItem name="4-1">添加套房</MenuItem></router-link>
                        <router-link to="/addsingle" ><MenuItem name="4-2">添加单间</MenuItem></router-link>
                        <router-link to="/addmember" ><MenuItem name="4-3">添加经纪人</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="ios-pie"></Icon>
                            图表
                        </template>
                        <router-link to="/dis" ><MenuItem name="5-1">房产分布</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="gear-a"></Icon>
                            设置
                        </template>
                        <router-link to="/setting" ><MenuItem name="6-1">个人设置</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="7">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            说明
                        </template>
                        <router-link to="/copy" ><MenuItem name="7-1">版权说明</MenuItem></router-link>
                    </Submenu>
                  </Menu>
                </Col>
                <Col span="21" > <router-view/></Col>
            </Row>
        </div>
        <div class="layout-copy">
          <div class="layout-copy-info">2014-2018 &copy; 毕业设计-胡津纬</div>
        </div>
    </div>
    <div class="loginBar" v-else>
        <div class="login" v-if="registerAccount">
            <template>
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <FormItem label="账户" prop="user">
                        <Input type="text" v-model="formCustom.user"></Input>
                    </FormItem>
                    <FormItem label="密码" prop="passwd">
                        <Input type="password" v-model="formCustom.passwd"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('formCustom')">登录</Button>
                        <Button type="primary" @click="testdata">登22录</Button>
                        <Button type="ghost" @click="registerAccount = false;formCustom={}" style="margin-left: 8px">去注册</Button>
                    </FormItem>
                </Form>
            </template>
        </div>
        <div class="login" v-else>
            <template>
                <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                    <FormItem label="账户" prop="user">
                        <Input type="text" v-model="formCustom.user"></Input>
                    </FormItem>
                    <FormItem label="密码" prop="passwd">
                        <Input type="password" v-model="formCustom.passwd"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="ghost" @click="reginster">注册</Button>
                    </FormItem>
                </Form>
            </template>
        </div>
    </div>
  </div>
</template>

<script>
let CryptoJS = require('crypto-js')
export default {
  name: 'app',
  data () {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写你的密码'))
      } else {
        if (this.formCustom.passwd !== '') {
                        // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('passwd')
        }
        callback()
      }
    }
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请填写你的账号'))
      } else {
        if (this.formCustom.user !== '') {
                        // 对第二个密码框单独验证
          this.$refs.formCustom.validateField('user')
        }
        callback()
      }
    }
    return {
      login: false,
      theme2: 'light',
      registerAccount: true,
      data: {},
      formCustom: {
        user: '',
        passwd: ''
      },
      ruleCustom: {
        passwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        user: [
          { validator: validateUser, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
        // mmd5 加密
      var params = {user: this.formCustom.user, pwd: CryptoJS.MD5(this.formCustom.passwd, { asString: true}).toString()}
      window.req.getUserInfo(this, params, (res) => {
        if (res.code === 0) {
          this.login = true
          this.data = res.data
        }
      })
    },
    reginster () { // 注册用户
      var vm = this
      this.$Message.success('注册成功!请前往登录吧');
      var params = {user: this.formCustom.user, pwd: CryptoJS.MD5(this.formCustom.passwd, { asString: true}).toString()}
      window.req.getUserInfo(this, params, (res) => {
        if (res.code === 0) {
          this.login = true
          this.data = res.data
        }
      })
      setTimeout(function () {
        vm.registerAccount = true
      }, 1000)
    },
    testdata () {
        let params = {
            user: 'qwe',
            password: '234',
            date: '2012-11-11'
        }
        window.req.userRigister(this, params, (res) => {
            console.log('res', res)
        if (res.code === 0) {
          this.login = true
          this.data = res.data
        }
      })
    }
  }
}
</script>

<style lang="less">
@import url('./style/common.less');
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  /* color: #333; */
}
a {
    color: #2c3e50;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border-color: #f5f5f5;
  .leftmenu:first-child ul {
      width: 100%!important;
  }
}
.ivu-row{
    width: 100%;
    height: 100%;
}
.ivu-col {
    height: 100%;
}
/* 登录对话框样式 */
.loginBar {
  width: 100%;
  height: 100%;
  background-image: url('./assets/textlogo.png');
  background-size: contain;
  position: relative;
  background-color: rgba(0,0,0,.1);
}
.login {
    width: 400px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
}
.ivu-form {
    text-align: center;
    margin-top: 76px;
}
/* 登录之后样式 */
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
        width: 108px;
        height: 45px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 1%;
        left: 0px;
        background-image: url('./assets/houselogo.png');
        background-size: cover;

    }
    .layout-header{
        height: 7%;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        background-image: url('./assets/textlogo.png');
        background-size: contain;
    }
    .layout-body {
      height: 83%;
    }
    .layout-copy{
        text-align: center;
        height: 5%;
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
        right: 5%;
        top: 32%;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
</style>

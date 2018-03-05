<template>
  <div id="setting">
      <h1>个人设置</h1>
      <Row>
          <i-col span="18" push="4">
            <p>姓名：{{data.name}}</p>
            <p>职位：{{data.role}}</p>
            <p>注册时间：{{data.time}}</p>
            <p>ID：{{data.ID}}</p>
            <p>头像：</p>
            <img :src="data.avatar" class="avatar">
            <input type="file" name="file" class="upload__input">
          </i-col>
      </Row>
  </div>
</template>
<script>
export default {
  data () {
      return {
          data: {
              name: 'yang',
              time: '2018-1-12',
              role: '',
              ID: 123,
              avatar: ''
          }
      }
  },
  methods: {
      getUserInfo () {
          window.req.getUserInfo(this, {}, res => {
              if (res.code === 0) {
                  this.data = res.data;
                  if (!res.data.avatar || res.data.avatar === '') {
                      this.data.avatar = 'http://cangdu.org:8001/img/default.jpg'
                  }
              }
          })
      }
  },
  created () {
      this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
#setting {
    h1{text-align: center}
    p{font-size: 16px;line-height: 40px;}
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
    .upload__input {
        width: 120px;
        height: 120px;
        display: block;
        position: relative;
        top: -120px;
        left: 0px;
        opacity: 0;
    }
}
</style>


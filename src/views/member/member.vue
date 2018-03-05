<template>
  <div class="member">
     <!-- <Row >
        <i-col span="6" push="1">
            <div><i-button type="info">增加成员</i-button></div>
        </i-col>
        <i-col span="6">
            <div><i-button type="warning">删除成员</i-button></div>
        </i-col>
    </Row> -->
      <Row>
        <i-col span="18" push="1">
          <i-table border  :columns="columns" :data="data"></i-table>
        </i-col>
    </Row>
  </div>
</template>
<script>
export default {
  data () {
    return {
                      columns: [
                    {
                        title: '姓名',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '联系电话',
                        key: 'tel'
                    },
                    {
                        title: '职位',
                        key: 'position'
                    },
                    {
                      title: '负责区域',
                      key: 'address'
                    },
                    {
                        title: '操纵',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '详情'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
        data: [
                    {
                        name: '王小明',
                        tel: 18,
                        address: '北京市朝阳区芍药居',
                        position: '片区经理'
                    },
                    {
                        name: '张小刚',
                        tel: 25,
                        position: '片区经理',
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        tel: 30,
                        position: '片区经理',
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        tel: 26,
                        position: '片区经理',
                        address: '深圳市南山区深南大道'
                    }
        ]
    }
  },
  methods: {
    show (index) {
      this.$Modal.info({
        title: '人员信息',
        content: `姓名：${this.data[index].name}<br>tel：${this.data[index].tel}<br>Address：${this.data[index].address}`
      })
    },
    remove (index) {
      this.data.splice(index, 1);
    }
  }
}
</script>
<style lang="less" scoped>
.member {
  .ivu-row{
    margin: 10px;
  }
}
</style>


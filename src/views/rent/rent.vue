<template>
  <div class="waitrent">
    <Row :gutter="16">
        <Col  span="20" >
             <Card style="width:100%">
               <h3>东软集团-待租套房</h3>
                <Table :columns="columns" border :data="table_data"></Table>
                 <Page :current="current" :total="total" simple></Page>
             </Card>
        </Col>
    </Row>
  </div>
</template>

<script>
import expandRow from './expand-row.vue'
export default {
  name: 'waitrent',
  components: { expandRow},
  data () {
    return {
      columns: [
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(expandRow, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          type: 'index',
          width: 60
        },
        {
          title: '小区名字',
          key: 'name'
        },
        {
          title: '录入时间',
          key: 'time'
        },
        {
          title: '户型',
          key: 'type'
        },
        {
          title: '数量',
          key: 'num',
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      table_data: [],
      current: 1,
      total: 20
    }
  },
  methods: {
    getData () {
      window.req.getWaitRent(this, {}, res => {
        if (res.code === 0) {
          this.table_data = res.data
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="less" scoped>
@mainColor:'#b47175';
#waitrent {
  width: 100%;
  height: 300px;
}
#pieBar {
  width: 100%;
  height: 300px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

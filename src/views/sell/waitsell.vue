<template>
  <div class="index">
    <Row>
        <Col span="6" >
            <div id="pieBar"></div>
        </Col>
        <Col span="18" >
            <div id="waitrent"></div>
        </Col>
    </Row>
  </div>
</template>

<script>
var echarts = require('echarts')
export default {
  name: 'index',
  data () {
    return {
      data: null,
      xData: [],
      yData: [],
      pieYdata: [],
      color: '#b47175'
    }
  },
  methods: {
    initData () {
      for (var item of this.data) {
        this.xData.push(item.name)
        this.yData.push(item.num)
        var obj = {value: item.num, name: item.name}
        this.pieYdata.push(obj)
      }
      this.initChart()
      this.initPie()
    },
    initChart () {
      var myChart = echarts.init(document.getElementById('waitrent'))
      myChart.setOption({
        color: [this.color],
        title: {
          text: '东软集团-待租套房',
          x: 'center',
          textStyle: {
            color: this.color
          }
        },
        tooltip: {},
        xAxis: {
          data: this.xData,
          name: '数量'
        },
        yAxis: {
          name: '数量'
        },
        series: [{
          name: '数量',
          type: 'line',
          data: this.pieYdata
        }]
      })
    },
    initPie () {
      var pieBar = echarts.init(document.getElementById('pieBar'))
      pieBar.setOption({
        title: {
          text: '东软集团-待租套房',
          x: 'center',
          textStyle: {
            color: '#b47175'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.xData
        },
        series: [
          {
            name: '小区名字',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: this.pieYdata,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    getData () {
      window.req.getWaitRent(this, {}, res => {
        if (res.code === 0) {
          this.data = res.data
          this.initData()
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

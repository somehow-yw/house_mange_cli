<template>
  <div id="dis">
    <Row>
        <i-col span="18" push="11">
            <h1>房产分布</h1>
        </i-col>
    </Row>
    <Row>
        <i-col span="18" push="3">
            <div id="dispie" style="width:100%;height:300px;">
            </div>
        </i-col>
    </Row>
  </div>
</template>
<script>
var echarts = require('echarts');
export default {
  data () {
      return {
          data: []
      }
  },
  methods: {
    initPie () {
          var myChart = echarts.init(document.getElementById('dispie')),
              xdata = [],
              ydata = [];
          this.data.forEach(function (item) {
              xdata.push(item.name)
              var obj = {value: item.num, name: item.name}
              ydata.push(obj)
          }, this)
          // 绘制图表
            myChart.setOption({
            title : {
                text: '东软集团房产图标',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: xdata},
            series : [
                {
                    name: '房产分布',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data: ydata,
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        });
    },
    getData () {
        window.req.getRented(this, {}, res => {
            if (res.code === 0) {
                this.data = res.data
            }
        })
    }
  },
  created () {
            this.getData();
            setTimeout(this.initPie, 100)
        },

}
</script>

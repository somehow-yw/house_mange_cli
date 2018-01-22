<template>
  <div class='index'>
    <template>
      <section class="data_section">
        <header class="section_title">数据统计</header>
        <Row :gutter="20" style="margin-bottom: 10px;">
                <Col :span="4"><div class="data_list today_head"><span class="data_num head">今日数据：</span></div></Col>
				<Col :span="4"><div class="data_list"><span class="data_num">{{todayData.room}}</span> 新增房间</div></Col>
				<Col :span="4"><div class="data_list"><span class="data_num">{{todayData.order}}</span> 新增订单</div></Col>
                <Col :span="4"><div class="data_list"><span class="data_num">{{todayData.member}}</span> 新增成员员</div></Col>
			</Row>
            <Row :gutter="20">
                <Col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></Col>
                <Col :span="4"><div class="data_list"><span class="data_num">{{totalData.room}}</span> 房间</div></Col>
                <Col :span="4"><div class="data_list"><span class="data_num">{{totalData.order}}</span> 订单</div></Col>
                <Col :span="4"><div class="data_list"><span class="data_num">{{totalData.member}}</span> 成员员</div></Col>
            </Row>
      </section>
      <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
    </template>
  </div>
</template>

<script>
import expandRow from './expand-row.vue'
import tendency from '../../components/tendency'
import dtime from 'time-formater' 
export default {
  name: 'index',
  components: { expandRow, tendency },
  data () {
    return {
      todayData: {
        room: 12,
        order: 123,
        member:2
      },
      totalData: {
        room: 345,
        order: 1303,
        member:678
      },
      sevenDate: {
        newRoom: [12, 14, 23, 45, 17, 37, 18],
        newOrder: [9, 12, 8, 13, 26, 12, 16],
        newMember: [1, 2, 4, 1, 7, 10, 2]
      },
      sevenDay: []
    }
  },
  methods: {
    exportData (type) {
      if (type === 1) {
        this.$refs.table.exportCsv({
          filename: '原始数据'
        })
      } else if (type === 2) {
        this.$refs.table.exportCsv({
          filename: '筛选后数据',
          original: false
        })
      } else if (type === 3) {
        this.$refs.table.exportCsv({
          filename: '自定义数据',
          columns: this.columns8.filter((col, index) => index < 4),
          data: this.data7.filter((data, index) => index < 4)
        })
      }
    },
    async initData(){
    			const today = dtime().format('YYYY-MM-DD')
    			Promise.all([userCount(today), orderCount(today), adminDayCount(today), getUserCount(), getOrderCount(), adminCount()])
    			.then(res => {
    				this.userCount = res[0].count;
    				this.orderCount = res[1].count;
                    this.adminCount = res[2].count;
                    this.allUserCount = res[3].count;
                    this.allOrderCount = res[4].count;
                    this.allAdminCount = res[5].count;
    			}).catch(err => {
    				console.log(err)
    			})
    		}
  },
  mounted(){
    		this.initData();
    		for (let i = 6; i > -1; i--) {
    			const date = dtime(new Date().getTime() - 86400000*i).format('YYYY-MM-DD')
    			this.sevenDay.push(date)
    		}
    	}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="less">
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
	.data_section{
		padding: 20px;
		margin-bottom: 40px;
		.section_title{
			text-align: center;
			font-size: 30px;
			margin-bottom: 10px;
		}
		.data_list{
			text-align: center;
			font-size: 14px;
			color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
	}
</style>

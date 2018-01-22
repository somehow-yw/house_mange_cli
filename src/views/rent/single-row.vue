<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">小区名称: </span>
                <span class="expand-value">{{ row.name }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">小区地址: </span>
                <span class="expand-value">{{ row.address }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">合租价格: </span>
                <span class="expand-value">{{ row.per }}元</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">房间面积: </span>
                <span class="expand-value">{{ row.area }}㎡</span>
            </Col>
            <Col span="8">
                <span class="expand-key">周边交通: </span>
                <span class="expand-value">{{ row.trans }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">物管费用: </span>
                <span class="expand-value">{{ row.pay }}元/㎡</span>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
}
</script>
<style scoped>
    .expand-row{
        margin-bottom: 16px;
    }
</style>
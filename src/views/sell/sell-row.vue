<template>
    <div>
        <Row class="expand-row">
            <Col span="12">
                <span class="expand-key">小区名称: </span>
                <span class="expand-value">{{ row.name }}</span>
            </Col>
            <Col span="12">
                <span class="expand-key">小区地址: </span>
                <span class="expand-value">{{ row.address }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <span class="expand-key">业务员: </span>
                <span class="expand-value">{{ row.worker }}</span>
            </Col>
            <Col span="12">
                <span class="expand-key">购买人: </span>
                <span class="expand-value">{{ row.people }</span>
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
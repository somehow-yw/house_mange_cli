<template>
    <Row>
        <Col span="15" offset="2">
             <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label="小区名字" prop="name">
                    <Input v-model="formValidate.name" placeholder="请输入小区名字"></Input>
                </FormItem>
                <FormItem label="小区地址" prop="address">
                    <Input v-model="formValidate.address" placeholder="请输入小区地址"></Input>
                </FormItem>
                <FormItem label="类型" prop="type">
                    <Select v-model="formValidate.type" placeholder="请选择房屋类型">
                        <Option value="主卧">主卧</Option>
                        <Option value="次卧">次卧</Option>
                        <Option value="隔断">隔断</Option>
                    </Select>
                </FormItem>
                <FormItem label="日期">
                    <Row>
                        <Col span="11">
                            <FormItem prop="date">
                                <DatePicker type="date" placeholder="选择日期" v-model="formValidate.date"></DatePicker>
                            </FormItem>
                        </Col>
                        <Col span="2" style="text-align: center">-</Col>
                        <Col span="11">
                            <FormItem prop="time">
                                <TimePicker type="time" placeholder="选择时间" v-model="formValidate.time"></TimePicker>
                            </FormItem>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="独卫" prop="credit">
                    <RadioGroup v-model="formValidate.credit">
                        <Radio label="yes">有</Radio>
                        <Radio label="no">无</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="优势" prop="advantage">
                    <CheckboxGroup v-model="formValidate.advantage">
                        <Checkbox label="近一号线"></Checkbox>
                        <Checkbox label="高档小区"></Checkbox>
                        <Checkbox label="安静"></Checkbox>
                        <Checkbox label="有空调"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="备注" prop="remark">
                    <Input v-model="formValidate.remark" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="还有什么需要告知的呢"></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                    <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">清空</Button>
                </FormItem>
            </Form>
        </Col>
    </Row>
   
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    address: '',
                    type: '',
                    credit: '',
                    advantage: [],
                    date: '',
                    time: '',
                    remark: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '请输入小区名字', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入小区地址', trigger: 'blur' }
                    ],
                    type: [
                        { required: true, message: '请选择房屋类型', trigger: 'change' }
                    ],
                    credit: [
                        { required: true, message: '请选择是否贷款', trigger: 'change' }
                    ],
                    advantage: [
                        { required: true, type: 'array', min: 1, message: '说说房屋的优点吧', trigger: 'change' },
                        { type: 'array', max: 2, message: '至少选择两个吧', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: '请选择录入的日期', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'date', message: '请选择录入的时间', trigger: 'change' }
                    ],
                    remark: [
                        { required: true, message: '备注', trigger: 'blur' },
                        { type: 'string', min: 0, message: '', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
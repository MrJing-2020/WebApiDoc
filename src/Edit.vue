<template>
    <div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">文档</Breadcrumb-item>
                <Breadcrumb-item>编辑</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content-main">
            <Form :model="formItem" :label-width="80">
                <Form-item label="功能模块">
                    <Select v-model="formItem.selectModule" placeholder="请选择">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                    </Select>
                </Form-item>
                <Form-item label="接口名">
                    <Input v-model="formItem.inputApiName" placeholder="请输入"></Input>
                </Form-item>
                <Form-item label="HTTP方法">
                    <Select v-model="formItem.selectHttp" placeholder="请选择">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                    </Select>
                </Form-item>
                <Form-item label="URL">
                    <Input v-model="formItem.inputUrl" placeholder="请输入"></Input>
                </Form-item>

                <Form-item label="参数">
                    <vue-html5-editor :content="formItem.editParameter" :height="100" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="返回数据">
                    <vue-html5-editor :content="formItem.editReturnValue" :height="200" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="说明">
                    <Input v-model="formItem.description" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" v-on:click="submitForm">提交</Button>
                    <Button type="ghost" style="margin-left: 8px">取消</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            var formItem = {inputApiName: '哈哈',};
            this.$http.get('/someUrl', {id:this.$route.params.id}).then(response => {
                var formItem=response.body;
                formItem.inputApiName="";
            }, response => {
                // error callback
                formItem.inputApiName="哈哈哈哈或";
            });
            return {formItem:formItem};
//            return {
//                formItem: {
//                    selectModule:'',
//                    inputApiName: '',
//                    selectHttp: '',
//                    inputUrl:'',
//                    editParameter:'111',
//                    editReturnValue:'222',
//                    description: ''
//                }
//            }
        },
        methods: {
            submitForm: function (event) {
                // POST /someUrl
                this.$http.post('/someUrl', this.formItem).then(response => {
                    // get status
                    response.status;
                    // get status text
                    response.statusText;
                    // get 'Expires' header
                    response.headers.get('Expires');
                    // get body data
                    this.someData = response.body;
                }, response => {
                    // error callback
                });
            }
        }
    }
</script>
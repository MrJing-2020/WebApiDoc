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
                <input type="hidden" v-model="formItem.Id"/>
                <Form-item label="功能模块">
                    <Select v-model="formItem.ApiId" placeholder="请选择">
                        <Option v-for="option in moudle" v-bind:value="option.Id">
                            {{ option.Name }}
                        </Option>
                    </Select>
                </Form-item>
                <Form-item label="接口名">
                    <Input v-model="formItem.Name" placeholder="请输入"></Input>
                </Form-item>
                <Form-item label="HTTP方法">
                    <Select v-model="formItem.HttpMethod" placeholder="请选择">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                    </Select>
                </Form-item>
                <Form-item label="URL">
                    <Input v-model="formItem.Url" placeholder="请输入"></Input>
                </Form-item>
                <Form-item label="参数类型">
                    <Input v-model="formItem.SupportType" placeholder="请输入"></Input>
                </Form-item>
                <Form-item label="参数">
                    <vue-html5-editor @change="updateRequestParms" :content="formItem.RequestParms" :height="100" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="返回数据">
                    <vue-html5-editor @change="updateReturnData" :content="formItem.ReturnData" :height="200" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="返回错误">
                    <vue-html5-editor @change="updateErrorResult" :content="formItem.ErrorResult" :height="100" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="说明">
                    <Input v-model="formItem.Description" type="textarea"  placeholder="请输入..."></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" v-on:click="submitForm">提交</Button>
                    <Button type="ghost" v-on:click="goBack" style="margin-left: 8px">取消</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem:{},
                moudle:[]
            }
        },
        methods: {
            submitForm: function (event) {
                // POST /someUrl
                this.$http.post(this.ServerPath+'api/ApiDoc/Document/SubDocData',this.formItem).then(response => {
                    if(this.formItem.Id==undefined||this.formItem.Id==null){
                        this.$router.push('/apiList/'+this.formItem.ApiId);
                    }else {
                        this.$router.push('/detail/'+this.formItem.Id);
                    }
                }, response => {
                    // error callback
                });
            },
            fetchData (){
                if(this.$route.params.id!=null&&this.$route.params.id!=undefined){
                    this.$http.get(this.ServerPath+'api/ApiDoc/Document/GetDocDetail/'+this.$route.params.id).then(response => {
                        this.formItem = response.body;
                    }, response => {
                    });
                }
            },
            updateRequestParms(content){
                this.formItem.RequestParms=content;
            },
            updateReturnData(content){
                this.formItem.ReturnData=content;
            },
            updateErrorResult(content){
                this.formItem.ErrorResult=content;
            },
            goBack(){
                this.$router.go(-1)
            },
            getMoudle(){
                this.$http.get(this.ServerPath+'api/ApiDoc/Document/GetApiData').then(response => {
                    this.moudle = response.body;
                }, response => {
                });
            }
        },
        created () {
            this.fetchData();
            this.getMoudle()
        },
        watch: {
            '$route': 'fetchData'
        }
    }
</script>
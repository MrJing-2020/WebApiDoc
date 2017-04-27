<style scoped>
    .field-name{
        margin: 10px;
    }
    .field-value{
        margin-top: 10px;
        font-size: 13px;
    }
</style>
<template>
    <div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">模块接口列表</Breadcrumb-item>
                <Breadcrumb-item>接口详情</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content-main">
            <Tabs :animated="false">
                <Tab-pane label="请求信息">
                    <div style="background:#eee;padding: 10px">
                        <Card :bordered="false">
                            <p slot="title">请求信息</p>
                            <div>
                                <h4 class="field-name" >接口名：</h4>
                                <Alert class="field-value">{{detail.Name}}</Alert>
                            </div>
                            <div>
                                <h4 class="field-name" >HTTP方法：</h4>
                                <Alert class="field-value">{{detail.HttpMethod}}</Alert>
                            </div>
                            <div>
                                <h4 class="field-name" >地址：</h4>
                                <Alert class="field-value">{{detail.Url}}</Alert>
                            </div>
                            <div>
                                <h4 class="field-name" >请求参数示例：</h4>
                                <Alert class="field-value" v-html='detail.RequestParms'></Alert>
                            </div>
                            <div>
                                <h4 class="field-name" >支持的数据类型：</h4>
                                <Alert class="field-value">{{detail.SupportType}}</Alert>
                            </div>
                        </Card>
                    </div>
                </Tab-pane>
                <Tab-pane label="响应数据">
                    <div style="background:#eee;padding: 10px">
                        <Card :bordered="false">
                            <p slot="title">返回结果</p>
                            <div>
                                <h4 class="field-name" >成功示例：</h4>
                                <Alert class="field-value" v-html='detail.ReturnData'></Alert>
                            </div>
                            <div>
                                <h4 class="field-name" >失败（状态码为4**，5**时）示例：</h4>
                                <Alert type="error" class="field-value" v-html='detail.ErrorResult'></Alert>
                            </div>
                        </Card>
                    </div>
                </Tab-pane>
                <Tab-pane label="接口说明">
                    <div style="background:#eee;padding: 10px">
                        <Card :bordered="false">
                            <p slot="title">接口说明</p>
                            <div>
                                <h4 class="field-name" >接口说明：</h4>
                                <Alert class="field-value">{{detail.Description}}</Alert>
                            </div>
                        </Card>
                    </div>
                </Tab-pane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                self:this,
                loading: false,
                detail:{}
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            goBack (id) {
                this.$router.push('/apilist/'+id);
            },
            fetchData (){
                this.loading = true
                this.$http.get(this.ServerPath+'api/ApiDoc/Document/GetDocDetail/'+this.$route.params.id).then(response => {
                    this.loading = false
                    this.detail = response.body;
                }, response => {
                    this.loading = false
                });
            }
        },
        watch: {
            '$route': 'fetchData'
        }
    }
</script>
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
                <Form-item label="模块名">
                    <Input v-model="formItem.Name" placeholder="请输入"></Input>
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
                formItem:{}
            }
        },
        methods: {
            submitForm: function (event) {
                this.$http.post(this.ServerPath+'api/ApiDoc/Document/SubApiData',this.formItem).then(response => {
                    if(this.formItem.Id!=undefined){
                        this.$router.push('/apiList/'+this.formItem.Id);
                    }else {
                        this.$router.push('/');
                    }
                }, response => {
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
            goBack(){
                this.$router.go(-1)
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        }
    }
</script>
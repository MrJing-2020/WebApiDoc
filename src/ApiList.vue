<template>
    <div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">用户相关模块</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content-main">
            <Table border :context="self" :columns="columns" :data="tableData"></Table>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                loading: false,
                tableData: null,
                columns: [
                    {
                        title: '接口名',
                        key: 'Name',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.Name}</strong>`;
                        }
                    },
                    {
                        title: 'http方法',
                        key: 'HttpMethod'
                    },
                    {
                        title: '操作',
                        key: 'Id',
                        width: 200,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="info" size="small" @click="show('${row.Id}')">查看</i-button> <i-button type="primary" size="small" @click="edit('${row.Id}')">编辑</i-button> <i-button type="error" size="small" @click="remove('${row.Id}')">删除</i-button>`;
                        }
                    }
                ]
            }
        },
        created () {
            // 组件创建完后获取数据，
            this.fetchData()
        },
        methods: {
            show (id) {
                this.$router.push('/detail/'+id);
            },
            edit (id) {
                this.$router.push('/edit/'+id);
            },
            remove (id) {
            },
            fetchData (){
                this.error = this.post = null
                this.loading = true
                this.$http.get('http://localhost:8015/api/ApiDoc/Document/GetApiDocList', {id:this.$route.params.id}).then(response => {
                    this.loading = false
                    this.tableData = response.body;
                }, response => {
                    this.loading = false
                    // error callback
                });
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
    }
</script>
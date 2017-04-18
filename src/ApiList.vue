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
            <Table :context="self" :columns="theader" :data="tbody"></Table>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                self:this,
                tbody: [],
                theader: [
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
                        title: '说明',
                        key: 'Description'
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
                this.$http.get('http://localhost:8015/api/ApiDoc/Document/GetApiDetail/'+this.$route.params.id).then(response => {
                    this.tbody = response.body;
                }, response => {
                });
            }
        },
        watch: {
            '$route': 'fetchData'
        }
    }
</script>
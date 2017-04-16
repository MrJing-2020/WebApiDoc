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
            <Table v-if="isShow === true" border :context="self" :columns="columns7" :data="data6"></Table>
            <Tabs v-if="isShow === false" :animated="false">
                <Tab-pane label="请求信息">标签一的内容</Tab-pane>
                <Tab-pane label="响应数据">标签二的内容</Tab-pane>
                <Tab-pane label="接口说明">标签三的内容</Tab-pane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                self: this,
                columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        render (row, column, index) {
                            return `<Icon type="person"></Icon> <strong>${row.name}</strong>`;
                        }
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render (row, column, index) {
                            return `<i-button type="primary" size="small" @click="edit(${row.age})">编辑</i-button><i-button type="primary" size="small" @click="show(${row.age})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`;
                        }
                    }
                ],
                data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ],
                isShow:true
            }
        },
        methods: {
            show (index) {
//                this.$Modal.info({
//                    title: '用户信息',
//                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
//                })
                this.isShow=false;
                alert(index)
            },
            edit (index) {
                this.$router.push('edit/'+index)
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>
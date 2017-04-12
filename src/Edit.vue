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
                    <Select v-model="formItem.select" placeholder="请选择">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                    </Select>
                </Form-item>
                <Form-item label="接口名">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </Form-item>
                <Form-item label="HTTP方法">
                    <Select v-model="formItem.select" placeholder="请选择">
                        <Option value="GET">GET</Option>
                        <Option value="POST">POST</Option>
                    </Select>
                </Form-item>
                <Form-item label="URL">
                    <Input v-model="formItem.input" placeholder="请输入"></Input>
                </Form-item>

                <Form-item label="参数">
                    <vue-html5-editor :content="content" :height="100" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="返回数据">
                    <vue-html5-editor :content="content" :height="200" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
                </Form-item>
                <Form-item label="说明">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
                </Form-item>
                <Form-item>
                    <Button type="primary">提交</Button>
                    <Button type="ghost" style="margin-left: 8px">取消</Button>
                </Form-item>
            </Form>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                formItem: {
                    input: '',
                    select: '',
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                }
            }
        }
    }
</script>
<template>
    <div>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <Breadcrumb-item href="#">首页</Breadcrumb-item>
                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                <Breadcrumb-item>某应用</Breadcrumb-item>
            </Breadcrumb>
        </div>
        <div class="layout-content-main">
            <Tabs :animated="false">
                <Tab-pane label="请求信息">标签一的内容</Tab-pane>
                <Tab-pane label="响应数据">标签二的内容</Tab-pane>
                <Tab-pane label="接口说明">标签三的内容</Tab-pane>
            </Tabs>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>
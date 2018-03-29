<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-menu"></i> 工艺管理</el-breadcrumb-item>
                <el-breadcrumb-item>工艺基础信息</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="handle-box">
             <div class="pull-left">
                <el-button type="primary" class=""   v-if="select_cate=='0'">新增工艺</el-button>
            </div>
            <div class="pull-right">
                <el-button type="primary" icon="delete" class="handle-del mr10"   v-if="select_cate=='0'">批量弃用</el-button>
                <el-button type="primary" icon="delete" class="handle-del mr10"   v-if="select_cate=='1'">批量启用</el-button>
                <el-select v-model="select_cate"  class="handle-select mr10">
                    <el-option key="0" label="启用" value="0">启用</el-option>
                    <el-option key="1" label="弃用" value="1">弃用</el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
        </div>
        
        <el-table :data="tableData3" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter">
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change ="handleCurrentChange"
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                select_cate:"0",
                select_word:"",
                tableData3: [{
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },

        methods: {
            toggleSelection(rows) {
                if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
                } else {
                this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log( this.multipleSelection)
            },
            queryData(){
                var BASE_PATH = "http://www.imes-inc.ser:6789/mes"
                var URL = BASE_PATH+'/' + 'queryCraftBasics.do'
                axios.get(URL, {
                  	type: 'vague',
					status:0,
					headNum: 1
                }).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
            }
        },

        mounted(){
            this.queryData()
           
        }
  }
</script>

<style scoped>
.crumbs{
    font-size: 14px;
    width: 100%;
    padding-bottom: 13px;
    border-bottom: 1px solid black
}
.handle-box{
    /* width: 100%;
    margin-bottom: 5px; */
}
.handle-select{
    width: 100px;
}
.handle-input{
    width: 120px;
    display: inline-block;
}
.pull-right{
    float: right;
}
.pull-left{
    float: left;
}
</style>
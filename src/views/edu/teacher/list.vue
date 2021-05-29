<template>
  <div class="app-container">
      讲师列表
    <!--表格-->
    <el-table
      v-loading="listLoading"
      :data="list"
    element-loading-text="数据加载中"
    border
    fit
    highlight-current-row>

    <el-table-column
    label="序号"
    width="70"
    align="center">
      <template slot-scope="scope">
        {{ (page-1)*limit+scope.$index+1}}
      </template>
    </el-table-column>
      <el-table-column prop="name" label="名称" width="80"/>
      <el-table-column label="头衔" width="80">
        <template slot-scope="scope">
          {{scope.row.level===1?'高级讲师':'首席讲师'}}
        </template>
      </el-table-column>
      <el-table-column prop="intro" label="资历"/>
      <el-table-column prop="gmtCreate" label="添加时间" width="160"/>
      <el-table-column prop="sort" label="排序" width="60"/>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <router-link :to="'/edu/teacher/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope)"/>
        </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
//引入调用teacher.js文件
import teacher from '@/api/edu/teacher'
export default ({
  data(){ //定义变量和初始值
    return{
      list:null,//查询之后接口返回集合
      page:1,//当前页
      limit:10,//每页记录数
      total:0,//总记录数
      teacherQuery:{} //条件封装对象
    }
  },
  created(){  //页面渲染之前执行，一般调用methods定义的方法
    this.getList()
  },
  methods:{ //创建具体的方法，调用teacher.js定义的方法
    //讲师列表的方法
    getList(){
      teacher.getTeacherListPage(this.page,this.limit,this.teacherQuery)
        .then(response =>{
          //response接口返回的数据
          //console.log(response)
          this.list=response.data.rows
          this.total=response.data.total
          console.log(this.list)
          console.log(this.total)
        }) //  请求成功
        .catch(error =>{
          console.log(error)
        }) //请求失败
    }
  }
})
</script>

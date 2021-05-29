<template>
  <div class="app-container">
      讲师列表
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
          console.log(response)
        }) //  请求成功
        .catch(error =>{ 
          console.log(error)
        }) //请求失败
    }
  }
})
</script>

import request from '@/utils/request'
export default{
    //1.讲师列表（条件查询分页）
    //current当前页 limit每页记录数 teacherQuery条件对象
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            url:`/eduservice/teacher/pageTeacherCondition/`+current+"/"+limit,
            method:'post',
            //teacherQuery条件对象，后端使用RequestBody获取数据
            //data表示对象转换成json进行传递到接口里面
            data:teacherQuery
        })
    },
    //添加讲师
    addTeacher(teacher){
        return request({
            url:`/eduservice/teacher/addTeacher`,
            method:'post',
            data:teacher
        })

    }
}

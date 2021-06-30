import request from '@/utils/request'
export default{
  //1 添加课程信息
  addCourseInfo(courseInfo){
    return request({
      url:'/eduservice/course/addCourseInfo',
      method:'post',
      data:courseInfo
    })
  },
  //2.查询所有讲师
  getListTeacher(){
    return request({
      url:'/eduservice/teacher/getAll',
      method:'get',
    })
  },
  // 根据课程id查询课程基本信息
  getCourseInfoId(id) {
    return request({
      url: '/eduservice/course/getCourseInfo/'+id,
      method: 'get'
    })
  },
  // 修改课程信息
  updateCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/course/updateCourseInfo',
      method: 'post',
      data: courseInfo
    })
  },
  //课程确认信息显示
  getPublihCourseInfo(id) {
    return request({
      url: '/eduservice/course/getPublishCourseInfo/'+id,
      method: 'get'
    })
  },
  //课程最终发布
  publishCourse(id) {
    return request({
      url: '/eduservice/course/publishCourse/'+id,
      method: 'post'
    })
  },

  //课程最终发布
  getListCourse(current, limit) {
    return request({
      url: `/eduservice/course/getCoursePage/${current}/${limit}`,
      method: 'get'
    })
  },

  // 删除课程
  reomveCourse(courseId) {
    return request({
      url: `/eduservice/course/${courseId}`,
      method: 'delete'
    })
  }

}

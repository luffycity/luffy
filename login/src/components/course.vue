<!-- -*- coding: utf-8 -*-
"""
@version:
@author: morgana
@license: Apache Licence
@contact: vipmorgana@gmail.com
@site:
@software: PyCharm
@file: course_detail.vue
@time: 2017/11/26 下午3:16
-->


<template>
  <div class="container">
    <div class="row">
  <div class="col-md-10 col-md-offset-6">
    <div class="thumbnail">
      <div class="caption" :name="coursedetail.id">
        <h3>{{coursedetail.course.name}}</h3>
        <p>课时:{{coursedetail.hour}}</p>
        <p>course_img:{{coursedetail.course_img}}</p>
        <p>course_slogan:{{coursedetail.course_slogan}}</p>
        <p>video_brief_link:{{coursedetail.video_brief_link}}</p>
        <p>why_study:{{coursedetail.why_study}}</p>
        <p>what_to_study_brief:{{coursedetail.what_to_study_brief}}</p>
        <p>areer_improvement:{{coursedetail.career_improvement}}</p>
        <p>prerequisite:{{coursedetail.prerequisite}}</p>
        <p v-for=" i in coursedetail.teacherss ">teacher:{{i.name}}</p>
        <div v-for="i in coursedetail.courseprices">
          <p><a href="#" class="btn btn-primary" role="button" :alt="i.id">{{i.valid_period}}/{{i.price}} </a></p>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
</template>

<script>
    export default {
//        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your course_detail',
                coursedetail:'',
//                id:"",
            }
        },
        mounted:function(){
          this.showList();
        },
        methods:{
          showList(){
            var url="http://127.0.0.1:8000/course/";
            var self = this;
            this.$axios.get(url,{
              params: {
                  id:self.$route.params.id
              }
            }).then(function(res){
//              console.log(res)
              self.coursedetail=res.data;
//              alert(self.coursedetail)
              console.log(self.coursedetail);


//              console.log(self.coursedetail.teacherss.name)
//              console.log(typeof (self.coursedetail.teacherss))
//               console.log(self.coursedetail.teacherss[0].name)
            }).catch(function (error) {
               console.log(error);
           })
          },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     @import "https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.css";
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

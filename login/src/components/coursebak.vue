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
      <div class="col-md-10 col-md-offset-8 col-md-push-3">
          <div class="bs-example" data-example-id="contextual-table">
    <table class="table">
      <thead>

      <tr>
          <th>#</th>
          <th>hours</th>
          <th>course_img</th>
          <th>course_slogan</th>
          <th>video_brief_link</th>
          <th>why_study</th>
          <th>what_to_study_brief</th>
          <th>career_improvement</th>
          <th>prerequisite</th>
          <th>teacherss</th>
        </tr>
      </thead>
      <tbody >
        <tr class="active">
              <td>{{coursedetail.id}}</td>
              <td>{{coursedetail.hours}}</td>
              <td>{{coursedetail.course_img}}</td>
              <td>{{coursedetail.course_slogan}}</td>
              <td>{{coursedetail.video_brief_link}}</td>
              <td>{{coursedetail.why_study}}</td>
              <td>{{coursedetail.what_to_study_brief}}</td>
              <td>{{coursedetail.career_improvement}}</td>
              <td>{{coursedetail.prerequisite}}</td>
              <td v-for=" i in coursedetail.teacherss ">{{i.name}}</td>
        </tr>
        <ul>
          <li>id</li>
          <li>周期</li>
          <li>价格</li>
        </ul>
        <ul v-for="i in coursedetail.courseprices">
          <li>{{i.id}}</li>
          <li>{{i.valid_period}}</li>
          <li>{{i.price}}</li>
        </ul>
      </tbody>
    </table>
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

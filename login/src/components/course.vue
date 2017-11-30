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

    <div class="caption" :name="coursedetail.id">

      <div class="row">
        <h3 class="col-md-12">{{courseName}}</h3>
      </div>

      <!--列表开始-->
      <table class="table table-striped table-bordered table-hover ">
        <thead>
        <tr>
          <td>标题</td>
          <td>内容</td>
        </tr>
        </thead>
        <tbody>
        <!--<tr>-->
        <!--<td>课时:</td>-->
        <!--<td>{{coursedetail.hour}}</td>-->
        <!--</tr>-->
        <tr>
          <td>course_img</td>
          <td>{{coursedetail.course_img}}</td>
        </tr>
        <tr>
          <td>course_slogan</td>
          <td>{{coursedetail.course_slogan}}</td>
        </tr>
        <tr>
          <td>video_brief_link</td>
          <td>{{coursedetail.video_brief_link}}</td>
        </tr>
        <tr>
          <td>why_study</td>
          <td>{{coursedetail.why_study}}</td>
        </tr>
        <tr>
          <td>what_to_study_brief</td>
          <td>{{coursedetail.what_to_study_brief}}</td>
        </tr>
        <tr>
          <td>career_improvement</td>
          <td>{{coursedetail.areer_improvement}}</td>
        </tr>
        <tr>
          <td>prerequisite</td>
          <td>{{coursedetail.prerequisite}}</td>
        </tr>
        <tr>
          <td>teacher</td>
          <td><span v-for=" i in coursedetail.teacherss ">{{i.name}}</span></td>
        </tr>
        </tbody>
      </table>
      <!--列表结束-->
      <!--策略开始-->
      <ul>
        <li v-for="i in coursedetail.courseprices">
          <a class="btn btn-primary btn-group" role="button" :alt="i.id" @click="updatePid(i.id)">{{i.valid_period}}/{{i.price}} </a>
        </li>
      </ul>
      <!--策略结束-->
      <!--按钮开始-->
      <div>
        <a class="btn btn-success" @click="addCar">加入购物车</a>
      </div>
      <!--按钮结束-->

    </div>

  </div>

</template>

<script>
  export default {
//        name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your course_detail',
        coursedetail: '',
        courseName: '',
        cid: '',
        pid: '',
      }
    },
    mounted: function () {
      this.showData();
    },
    methods: {
      showData(){
        var cid = this.$route.params.id
        var url = "http://127.0.0.1:8000/api/v1/course/"+cid+'/';
        var self = this;
        this.$axios.get(url)
          .then(function (res) {
          self.coursedetail = res.data;
          console.log(res.data)
          self.courseName = res.data.course_name;
          console.log(self.courseName)
          self.cid = res.data.id
        }).catch(function (error) {
          console.log(error);
        })
      },
      updatePid(pid){
          this.pid = pid
      },
      addCar(){
          var url = "http://127.0.0.1:8000/api/v1/add_goods/"
          this.$axios.request({
            method: 'POST',
            url:url,
            data:{
              course_id:this.cid,
              period_id:this.pid,
              token:this.$store.state.token
            }
            }).then(function (response) {
                console.log(response)
          }).catch(function (error) {

          })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "../assets/bootstrap/css/bootstrap.css";*/
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
    color: white!important;
  }

</style>

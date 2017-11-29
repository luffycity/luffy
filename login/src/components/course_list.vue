<!-- -*- coding: utf-8 -*-
"""
@version:
@author: morgana
@license: Apache Licence
@contact: vipmorgana@gmail.com
@site:
@software: PyCharm
@file: course_list.vue
@time: 2017/11/26 下午3:16
-->


<template>
  <div>
    <div class="container">
      <div class="row">
        <h3 class="col-md-12">课程列表</h3>
        <table class="table table-striped table-bordered table-hover">
          <thead>
          <tr>
            <th>#</th>
            <td>课程名称</td>
            <td>课程截图</td>
            <td>简介</td>
            <td>难度等级</td>
            <td>详细信息</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in courselist">
            <th scope="row">{{item.id}}</th>
            <td>{{ item.name }}</td>
            <td>{{item.course_img}}</td>
            <td>{{item.brief}}</td>
            <td>{{item.level_name}}</td>
            <td><router-link :to="{name:'course',params:{id:item.id}}">详细信息</router-link></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your course_list',
        name: "",
//                courselist:{'name':''},
        courselist: [],
        detail: '',
        isshow: true,
      }
    },
    mounted: function () {
      this.showList();
    },
    methods: {
      showList(){
        var url = "http://127.0.0.1:8000/api/v1/course_list/";
        var self = this;
        this.$axios.get(url).then(function (res) {
          self.courselist = res.data;
        }).catch(function (error) {
          console.log(error);
        })
      },
      showdetail(data){
        this.isshow = false;
        this.detail = data;
      },
      back_to_container(){
        this.isshow = true;
        this.detail = '';

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*@import "https://cdn.bootcss.com/bootstrap/4.0.0-beta.2/css/bootstrap.css";*/
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
    color: #42b983;
  }
</style>

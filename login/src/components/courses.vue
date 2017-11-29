<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <td>课程</td>
          <td>简介</td>
          <td>难度级别</td>
          <td>详细</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in courseList">
          <td>{{item.name}}</td>
          <td>{{item.brief}}</td>
          <td>{{item.level_name}}</td>
          <td><a :href='url+item.id'>详细信息</a></td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',

    data () {
      return {
        msg: '普通课程列表',
        courseList: [],
        url:'#/detail/'

      }
    },
    mounted () {
      this.showTable()
    },
    methods: {
      showTable: function () {
        var url = this.$store.state.apiList.course_list;
        var self = this;
        axios.get(url)
          .then(function (response) {
          self.courseList = response.data
        }).catch(function (error) {

        })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

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

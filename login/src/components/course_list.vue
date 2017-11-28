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
        <div class="col-md-10 col-md-offset-8 col-md-push-3">
          <div class="bs-example" data-example-id="contextual-table">
    <table class="table">
      <thead>
        <tr >
          <th>#</th>
          <th>课程名称</th>
          <th>课程截图</th>
          <th>课程类型</th>
          <th>课程费用类型</th>
          <th>degree_course</th>
          <th>brief</th>
          <th>level</th>
          <th>pub_date</th>
          <th>period</th>
          <th>order</th>
          <th>attachment_path</th>
          <th>status</th>
          <!--<th>coupon</th>-->
          <!--<th>price_policy</th>-->
          <!--<th>课程add</th>-->
        </tr>
      </thead>
      <tbody >
        <tr class="active" v-for="item in courselist">
          <th scope="row">{{item.id}}</th>

          <td><router-link :to="{name:'course',params:{id:item.id}}">{{ item.name }}</router-link></td>
          <!--<td>{{item.name}}</·td>-->
          <td>{{item.course_img}}</td>
          <td>{{item.sub_category}}</td>
          <td>{{item.course_type}}</td>
          <td>{{item.degree_course}}</td>
          <td>{{item.level_name}}</td>
          <td>{{item.pub_date}}</td>
          <td>{{item.period}}</td>
          <td>{{item.order}}</td>
          <td>{{item.attachment_path}}</td>
          <td>{{item.status}}</td>
          <td>{{item.template_id}}</td>
          <!--<td>{{item.coupon}}</td>-->
          <!--<td>{{item.price_policy}}</td>-->
          <!--<td><a :href='"#/course/"+item.id'>add</a></td>-->

          <!--<td><button v-on:click="showdetail(item)">add</button></td>-->
        </tr>
      </tbody>
    </table>
  </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="detail" v-else>-->
      <!--<p v-text="detail"></p>-->
      <!--<button v-on:click="back_to_container">back</button>-->
    <!--</div>-->



</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your course_list',
                name:"",
//                courselist:{'name':''},
                courselist:[],
              detail:'',
              isshow:true,
            }
        },
        mounted:function(){
          this.showList();
        },
        methods:{
          showList(){
            var url="http://127.0.0.1:8000/course_list/";
            var self = this;
            this.$axios.get(url).then(function(res){
              self.courselist=res.data;
//              console.log(self.courselist)
            }).catch(function (error) {
               console.log(error);
           })
          },
          showdetail(data){
              this.isshow=false;
//              alert(JSON.stringify(data))
              this.detail=data;
          },
          back_to_container(){
              this.isshow=true;
              this.detail='';

          }
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

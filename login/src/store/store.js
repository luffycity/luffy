import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  // 组件中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth: 'http://127.0.0.1:8000/api/v1/login/',
      courses: 'http://127.0.0.1:8000/api/v1/course_list/',
    }
  },
  mutations: {
    // 组件中通过 this.$store.commit(saveToken,参数)  调用
    saveToken: function (state, usernameToken) {
      state.username = usernameToken.username;
      state.token = usernameToken.token;
      Cookie.set("username", usernameToken.username, "20min");
      Cookie.set("token", usernameToken.token, "20min");

    },
    clearToken: function (state) {
      state.username = null;
      Cookie.remove('username');
      Cookie.remove('token');
      console.log(Cookie.get('token'))
    }
  },

})

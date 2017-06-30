<template>
  <div>
    <h2 v-show="firstView">Enter name to search</h2>
    <h2 v-show="loading">Loading...</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row">
      <div class="card" v-for="user in users">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    //app 传递过来的 input的输入值
    props: ['searchName'],
    //初始化 list  显示的4种状态
    data () {
      return {
        firstView: true,
        loading: false,
        errorMsg: null,
        users: null
      }
    },
    //监视searchName
    watch: {
      //searchName  发生变化  更新状态 发送请求
      searchName () {
        this.firstView = false
        this.loading = true
        this.errorMsg = null
        this.users = null

        var url = `https://api.github.com/search/users?q=${this.searchName}`

        axios.get(url)
          .then(response=>{
            var result = response.data.items
            this.loading = false
            this.users = result.map((user)=>{
                return {
                  html_url: user.html_url,
                  avatar_url: user.avatar_url,
                  login: user.login
                }
            })
          })
          .catch(error=>{
            this.loading = false
            this.errorMsg = '请求失败'
          })
      },
      deep: true
    }
  }
</script>

<style>

</style>

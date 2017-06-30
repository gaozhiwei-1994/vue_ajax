<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <search :get-search-name="getSearchName"></search>
      </div>
    </section>
    <list :search-name="searchName"></list>
  </div>
</template>

<script>
  import list from './list.vue'
  import search from './search.vue'

  export default {
    //初始化数据，为了传递给list
    data () {
      return {
        searchName: ''
      }
    },

    methods: {
      //获取searchName的方法
      getSearchName (name) {
        this.searchName = name
        //console.log(this.searchName)
      }
    },
    components: {
      list,
      search
    }
  }
</script>

<style>

</style>

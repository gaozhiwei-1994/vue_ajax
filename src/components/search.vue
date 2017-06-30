<template>
  <div>
    <input type="text" placeholder="enter the name you search" v-model="inputName"/>
    <button @click="search">Search</button>
  </div>
</template>

<script>
  export default {
    //接收 传递的  方法
    props: ['getSearchName'],
    data () {
      return {
        inputName: ''
      }
    },
    methods: {
      //获取input 输入的值，并且传递给app
      search () {
        var searchName = this.inputName.trim()
        if(!searchName){
          return
        }
        this.getSearchName(searchName)
        this.inputName = ''
      }
    }


  }
</script>

<style>

</style>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import service from "@/components/service";

export default defineComponent({
  name: 'App',
  data(){
    return {
      test: String,
    }
  },
  mounted() {
    service.getAll()
        .then((response) => {
          this.testb = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
  }
})


</script>

<style lang="less">
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}
//
//#nav {
//  padding: 30px;
//
//  a {
//    font-weight: bold;
//    color: #2c3e50;
//
//    &.router-link-exact-active {
//      color: #42b983;
//    }
//  }
//}
</style>

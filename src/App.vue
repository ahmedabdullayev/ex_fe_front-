<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |

    <ul>
      <li v-for="category in categories" :key="category.id">
        <a class="kinda-link" v-on:click="routeTo(category.name)"> {{category.name}}</a>
      </li>
      <a href="javascript:">test</a>
      <a href="javascript:window.location.reload(true)">Reload</a>

    </ul>
    {{param}}
    <categoriesPosts :category="param" />
  </div>
  <router-view/>

</template>

<script lang="ts">
import service from "@/components/service";
import categoriesPosts from "@/components/categoriesPosts.vue";
import Categories from "@/types/Categories";
export default {
  components: {categoriesPosts},
  data(){
    return{
      categories: [] as Categories[],
      param: '' as string,
    }
  },

  methods: {
    getCategories(){
      service.getAllCategories()
          .then((response) => {
            this.categories = response.data;
            console.log(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
    getet(){
      return this.categories;
    },
    routeTo(rout : string){
      location.href = '/#/category/'+rout;
      window.location.reload(true)
    }
  },
  mounted() {
    this.getCategories()
    const param = window.location.href.split("/").pop();
    console.warn('parameter',param)
    this.param = param;

  }
}
</script>

<style lang="less">
a.kinda-link:hover { cursor: pointer; color: blue;}
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

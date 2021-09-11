<template id="routes-component">
  <div>
<!--    <categories-posts ref="loler"></categories-posts>-->
    <categories-posts ref="loler"></categories-posts>
    <get-categories ref="categoryList"></get-categories>
<!--    <h1 v-on:click="getThem"> here</h1>-->
<!--    <li v-for="category in categories" :key="category.id">-->
<!--      <router-link :to="{ name: 'category', params: {id: category.name} }" > {{category.name}}</router-link>-->
<!--    </li>-->
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Categories from "@/types/Categories";
import service from "@/components/service";
import CategoriesPosts from "@/components/categoriesPosts.vue";
import GetCategories from "@/components/getCategories.vue";

export default defineComponent({
  name: "Routes",
  components: {CategoriesPosts, GetCategories},
  props:{
      categories: Array as PropType<Categories[]>,
  },
  data(){
    return {
     // categories: [] as Categories[],
      cats: [] as Categories[],
    }
  },
  methods: {
    async getThem(){
     //this.cats = this.$props.categories;
     //  console.warn("mate", this.$refs.categoryList.getet())
      this.cats = this.$refs.categoryList.getet()
      console.warn('cats', this.cats)

   //   console.warn("them",this.cats);
    },
    callol(){
      this.$refs.loler.lol();
    }
  },
  async mounted() {
    service.getAllCategories()
        .then((response) => {
          this.cats = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
     // await this.$refs.categoryList.getCategories()
     // await this.getThem()
     //this.cats = this.$refs.categoryList.getet()
   // console.warn('check',this.$refs.categoryList.getCategories());
    //console.warn('data: ',this.categories)

  }
})
</script>
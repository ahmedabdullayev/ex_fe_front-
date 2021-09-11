<template id="getCategories-component">
  <div>
<!--    {{categories}}-->
    <Routes :categories="categories"></Routes>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Categories from "@/types/Categories";
import service from "@/components/service";
import Routes from "@/components/routes.vue";

export default defineComponent({
  name: "getCategories",
  components: {Routes},
  data(){
    return {
      categories: [] as Categories[],
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
    }
  },
})
</script>
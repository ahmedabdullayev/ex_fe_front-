<template>
  <div>
   Category page
    <categories-posts></categories-posts>
    <routes></routes>
    up
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import CategoriesPosts from "@/components/categoriesPosts.vue";
import Routes from "@/components/routes.vue";

export default defineComponent({
  name: "Category",
  components: {Routes, CategoriesPosts},

});

</script>

<style scoped>

</style>
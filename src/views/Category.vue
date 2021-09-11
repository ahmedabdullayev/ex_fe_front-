<template>
  <div>
    <div class="form-group">
      <h1>{{ categories }}</h1>
    </div>

    <div class="col-md-6">
      <h1>Page</h1>
    </div>
  </div>
</template>

<script lang="ts">
import {useRoute} from "vue-router";

export default {
  name: "Category",
  data(){
    return{
      categories: '' as string,
    }
  },

  mounted() {
    const route = useRoute();
    this.categories = route.params.id;
  },
  updated() {
    const route = useRoute();
    this.categories = route.params.id;
  }
}
</script>

<style scoped>

</style>
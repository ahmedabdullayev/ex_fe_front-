<template id="categoriesPosts-component">
<div>
  <div class="form-group">
<!--    <h1>Category: {{ categories }} dd</h1>-->
  </div>
  <h1>Posts</h1>
  <ul>

<!--    <li v-for="post in posts" :key="post.id" ref="loler">-->
<!--      {{post.content}}-->
<!--    </li>-->
  </ul>
</div>
</template>


<script lang="ts">
import {defineComponent, PropType} from "vue";
import Categories from "@/types/Categories";
import service from "@/components/service";
import string from "@/types/string"
import {useRoute} from "vue-router";
export default defineComponent({
  name: "categories-posts",
  props:{
    category:{
      type: '' as PropType<unknown>
    }
  },
  data(){
    return{
      categories: '' as string,
      posts: '' as string,
    }
  },
  methods: {
    getPosts(category: string) {
      service.getPostsByCategory(category)
          .then((response) => {
            //console.warn(this.posts)
            if(response.data == ''){
              this.posts = ''
              alert()
            }else{
              this.posts = response.data;
            }
          })
          .catch((e: Error) => {
            console.log(e);
          });
    },
    lol: function(){
      alert('lol')
    }
  },
  mounted() {
    console.warn(this.$props.category)
    // const route = useRoute();
    // this.categories = route.params.id;
    // const param = ''+this.$route.params.name;
    // console.warn(param)
    // this.getPosts(param);
    //this.$router.go()
    // if(this.$router.go()){
    //   alert('lol')
    // }
  },
  beforeUpdate() {

   //  const route = useRoute();
   // // this.categories = route.params.id;
   //  console.warn('update')
    //this.getPosts(this.$route.params.id);
  }
})
</script>

<style scoped>

</style>
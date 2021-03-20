<template>
  <div id="app">
      <h1>Comments</h1>
    <form>
        <div class="book">
        <p>What book are you looking for?</p>
        <input v-model="book" type="text">
        </div>
        <Catalog :books="books"  />
    </form>
  </div>
</template>
<script>
import Catalog from '../components/Catalog.vue'

export default {
  name: 'Comments',
  components: {
    Catalog
  },
  data() {
    return{ 
    book: "",
    comment: ""
    } 
  },
//   method: {
//         addComment(comment){
//             this.$root.$data.books.comment.push(comment);
//         }
//   },
 computed: {
  books() {
    return this.$root.$data.books.filter(x=>x.name.toLowerCase().search(this.book.toLowerCase()) >= 0);
  }
}
}
</script>

<style>


</style>

<template>
  <div class="home">
   <Catalog :books="books" />
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from '../components/Catalog.vue'

export default {
  name: 'Home',
  components: {
    Catalog
  },
 computed: {
  books() {
    return this.$root.$data.books;
  }
}
}
</script>

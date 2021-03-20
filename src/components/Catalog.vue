<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
      <div class="info">
        <h1>{{book.name}}</h1>
        <p>{{book.author}}</p>
      </div>
      
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Catalog',
  props: {
    books: Array
  },
//   methods: {
//       addComment(){
//         let comment = prompt("What is your comment?"); 
//         this.$root.$data.books.comment = comment;
//       }
//   }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}


.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.comment {
  display: flex;
  font-size: 10px;
  text-align: center;
  justify-content: center;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>

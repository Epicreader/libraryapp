<template>
<div class="addPage">
      <h1>Suggest new books here</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h2>Suggest a Book</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title">
        <p></p>
        <input v-model="author" placeholder="Author" >
        <p></p>
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addBook">
        <h2>{{addBook.title}}</h2>
        <p>{{addBook.author}}</p>
      </div>
    </div>
    
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Add',
    data() {
    return {
      title: "",
      addBook: null,
       items: [],
    author: "",
    }
  },  
  methods: {
      async upload() {
      try {
        
        let r2 = await axios.post('/api/books', {
          title: this.title,
          author: this.author,
        });
        this.addBook = r2.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>


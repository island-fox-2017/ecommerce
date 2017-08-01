
let $adminForm = ('#adminForm');

// $adminForm.submit(function() {
//   axios.post('http://localhost:4500/book/', {
//     isbn: req.body.isbn,
//     title: req.body.title,
//     author: req.body.author,
//     category: req.body.category,
//     stock: req.body.stock,
//     image: "http://localhost:8080/assets/img/" + req.body.image
//   })
// });

var app = new Vue({
  el: '#app',
  data: {
    book_list: [],
    isbn: "",
    title: "",
    author: "",
    category: "",
    stock: "",
    image: "",
    isActive: true
  },
  methods: {
    addBook: function() {
      let self = this;
      axios.post('http://localhost:4500/book/', {
        isbn: self.isbn,
        title: self.title,
        author: self.author,
        category: self.category,
        stock: self.stock,
        image: "http://localhost:8080/assets/img/" + self.image
      })
      .then((result) => {
        dataAdded = JSON.parse(result.config.data)
        dataAdded.isActive = true;
        self.book_list.push(dataAdded);
        // var container = this.$el.querySelector("#books");
        // let cont = container.scrollHeight+120;
        // // container.scrollTop = cont;
        // console.log(cont);
        $("#books").animate({ scrollTop: $('#books')[0].scrollHeight}, 1000);
      })
      .catch(() => console.log("Fail to Create!"))
    },
    deleteBook: function(title) {
      let selectedIndex = this.book_list.findIndex(i => i.title == title)
      console.log(this.book_list[selectedIndex]._id);
      axios.delete(`http://localhost:4500/book/${this.book_list[selectedIndex]._id}`)
      .then(() => {
        this.book_list.splice(selectedIndex,1);
        console.log("Successfully Deleted!")
      })
      .catch(() => console.log("Fail to Delete!"))
    },
    updateBook: function(idx, id) {
      let self = this;
      console.log(idx);
      console.log(id);
      console.log(self.book_list[idx].isbn);
      console.log(self.book_list[idx].title);
      console.log(self.book_list[idx].author);
      console.log(self.book_list[idx].category);
      console.log(self.book_list[idx].stock);
      console.log(self.book_list[idx].image);
      // axios.put(`http://localhost:4500/book/${id}`, {
      //   isbn: self.isbn,
      //   title: self.title,
      //   author: self.author,
      //   category: self.category,
      //   stock: self.stock,
      //   image: "http://localhost:8080/assets/img/" + self.image
      // })
      // .then(() => console.log("Successfully Updated!"))
      // .catch(() => console.log("Fail to Update!"))

      axios.put(`http://localhost:4500/book/${id}`, {
        isbn: self.book_list[idx].isbn,
        title: self.book_list[idx].title,
        author: self.book_list[idx].author,
        category: self.book_list[idx].category,
        stock: self.book_list[idx].stock,
        image: self.book_list[idx].image
      })
      .then(() => console.log("Successfully Updated!"))
      .catch(() => console.log("Fail to Update!"))
    },
    togglePer (item) {
      this.toggle();
      item.isActive = !item.isActive;
    },
    toggle () {
      this.isActive = !this.isActive;
    }
  },
  created () {
    let self = this;
    axios.get('http://localhost:4500/book/')
    .then(result => {
      // result.data[0].isActive = true;
      // console.log(result.data[0]);
      for(i = 0; i < result.data.length; i++) {
        result.data[i].isActive = true;
      }
      console.log(result.data);
      // result.data.forEach(resu => {
      //   console.log(resu);
      //   resu.data.isActive = true;
      // })
      self.book_list = result.data;
    })
    .catch(err => console.log(err))
  }
})

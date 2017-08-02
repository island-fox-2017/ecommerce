// vuejs
var app = new Vue({
  el: '#app',
  data: {
    authorList: ['a', 'b', 'c', 'd'],
    booksData: [],
    cart: [],
    message: 'Hello Vue!'
  },
  methods: {
    bookList: function () {
      let a = this;
      axios.get('http://localhost:3000/books/')
      .then(books => {
        a.booksData = books.data
        // console.log(a.booksData);
      })
      .catch(err => {
        console.log(err);
      })
    },
    addToCart : function(item) {
      if (item.quantity == undefined) item.quantity = 1
      else item.quantity += 1
      this.cart.push(item);
    },
    removeFromCart: function(item) {
      item.quantity -=1;
      this.cart.splice(this.cart.indexOf(item), 1);
    }
  },
  created: function() {
    this.bookList()
  }
})



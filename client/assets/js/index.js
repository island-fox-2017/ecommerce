
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    book_info: [],
    transaction_info: []
  },
  methods: {
    addCart: function(bookId) {
      let id = "597749c7f8d8f94a4e1c400d";
      axios.post(`http://localhost:4500/transaction/${id}`, {
        book_id: bookId
      })
    }
  },
  mounted () {
    console.log(this);
    let self = this;
    axios.get('http://localhost:4500/book/')
    .then(result => {
      self.book_info = result.data;
      axios.get('http://localhost:4500/transaction')
      .then(result2 => {
        self.transaction_info = result2.data[1];
        console.log(self.transaction_info.booklist.length)
      })
      .catch(err => console.log(err))
    })
    .catch(err => console.log(err));
  }
})

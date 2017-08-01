
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    bookInfo: []
  },
  methods: {
    //
  },
  mounted () {
    console.log(this);
    let self = this;
    axios.get('http://localhost:4500/book/')
    .then(result => {
      self.bookInfo = result.data
      // console.log(self.bookInfo);
    })
    .catch(err => console.log(err));
  }
})

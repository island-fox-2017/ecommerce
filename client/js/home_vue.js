
axios.defaults.baseURL = `http://localhost:3000/api`
var app = new Vue({
  el: '#home',
  data: {
    message: 'hallo',
    items: []
  },
  methods: {
    getItems: function () {
      let self = this
      axios.get(`/items`)
      .then(response => {
        self.items = response.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    detailProduct: function (id) {
      console.log(id);
      window.location = `detail.html?id=${id}`
    },
    coba: function() {
      alert('coba')
    }
  },
  created: function () {
    this.getItems();
  }
})

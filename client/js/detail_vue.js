
axios.defaults.baseURL = `http://localhost:3000/api`

var app = new Vue ({
  el: '#detail',
  data: {
    message: 'tes aja',
    itemID: '',
    buyerID: '598006898dc01d4bfcdb494c',
    quantity: 1,
    price: 0,
    item: []
  },
  methods: {
    getParamValue: function (param) {
      let urlPage = decodeURIComponent(window.location.search.substring(1))
      let variables = urlPage.split('&')

      for (let i = 0; i < variables.length; i++) {
        let params = variables[i].split('=')
        let key = params[0]
        let value = params[1]
        if (key === param) {
          return value
        } else {
          return 'false param'
        }
      }
    },
    getSingleItem: function () {
      let self = this
      axios.get(`/items/${self.itemID}`)
      .then(response => {
        self.item = response.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    toCart: function () {
      let self = this
      axios.post('/transactions', {
        buyer: self.buyerID,
        total_price: self.total_price,
        item_list: self.itemID
      })
      .then(response => {
        console.log(response);
        let transID = response.data._id
        window.location = `cart.html?id=${transID}`
      })
      .catch(err => {
        console.log(err);
      })
    },
    getPrice: function (price) {
      this.price = price
    }
  },
  created: function () {
    this.itemID = this.getParamValue('id')
    this.getSingleItem()
  },
  computed: {
    total_price: function() {
      return this.quantity * this.item.price
    }
  }
})

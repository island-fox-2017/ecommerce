  axios.defaults.baseURL = 'http://localhost:3000/suplement';

var dataStorage = function() {
    var data = JSON.parse(localStorage.getItem('cart') || '[]');
    return data;
  }


var home = new Vue({
  el: '#home',
  data: {
    suplements: [],
    detail: [],
    cartItem: dataStorage(),
    qty: 0,
    total: 0
  },
  methods: {
    calculateTotal () {
      let total = 0;
      this.cartItem.forEach(data => {
        total += (this.qty * data.price);
      })
      this.total = total;
      localStorage.setItem("cart", JSON.stringify(this.cartItem))
    },
    removeItem: function(obj,index) {
      this.cartItem.splice(index,1)
      localStorage.setItem("cart", JSON.stringify(this.cartItem))
    },
    getAllSuplement () {
      axios.get('/')
      .then(res => {
        // console.log(res.data);
        this.suplements = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    getId (id) {
      axios.get(`/${id}`)
      .then(res => {
        console.log(res);
        this.detail = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    addToCart (obj) {
      // console.log(obj);
      var data = this.cartItem
      data.push(obj)
      console.log(data);
      localStorage.setItem('cart',JSON.stringify(data))  
      alert('Thank you, your item already added to Cart')
    }
  },
  created () {  
    // this.getCart()
    this.getAllSuplement()
  }
})
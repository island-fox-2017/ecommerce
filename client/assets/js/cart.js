
let app = new Vue({
  el: '#app',
  data: {
    message: 'hay',
    transaction_list: []
  },
  created () {
    let self = this;
    axios.get('http://localhost:4500/transaction')
    .then(result => {
      console.log(result.data);
      self.transaction_list = result.data;
    })
    .catch(err => console.log(err))
  }
});

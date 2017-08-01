
axios.defaults.baseURL = `http://localhost:3000/api`

var app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    transID: '',
    trans: []
  },
  methods: {
    getTransaction: function() {
      let self = this
      axios.get(`transactions/${this.transID}`)
      .then(response => {
        console.log(response.data);
        self.trans = response.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    getTransID: function() {
      this.transID = this.getParamValue('id')
    },
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
    }
  },
  created: function() {
    this.getTransID()
    this.getTransaction()
  }
})

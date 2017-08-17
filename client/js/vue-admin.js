var app2 = new Vue({
  el: '#app2',
  data: {
    msg: 'hai',
    id: '',
    list_data: [],
    isbn: '',
    title: '',
    author: '',
    category: '',
    stock: '',
    img:'',
    price: '',
    status: false
  },
  methods:{
    deleteBook: function(id){
      var self = this
      axios.delete(`http://35.187.230.100:3000/book/${id}`)
      .then(log=>{
        var newData = self.list_data.filter(function(data){
          return data._id != id
        })
        self.list_data = newData
      })
      .catch(err=>{
        console.log(err);
      })
    },
    addBook: function(){
      var self = this
      axios.post('http://35.187.230.100:3000/book', {
        isbn: self.isbn,
        title: self.title,
        author: self.author,
        category: self.category,
        stock: self.stock,
        img: self.img,
        price: self.price
      })
      .then(log=>{
        self.list_data.push(log.data)

      })
      .catch(err=>{
        console.log(err, 'ini error');
      })
    },
    editBook: function(id){
      this.toggleModal()
      var self = this
      axios.get(`http://35.187.230.100:3000/book/${id}`)
      .then(row=>{
        // console.log(row.data);
        self.isbn = row.data.isbn,
        self.title = row.data.title,
        self.author = row.data.author,
        self.category = row.data.category,
        self.stock = row.data.stock,
        self.img = row.data.img,
        self.price = row.data.price,
        self.id = row.data._id
      })
      .catch(err=>{
        console.log(err);
      })
    },
    toggleModal: function(){
      this.status = !this.status
    },
    updateBook: function(){
      var self = this
      console.log(self.id);
      axios.put(`http://35.187.230.100:3000/book/${self.id}`,{
        isbn: self.isbn,
        title: self.title,
        author: self.author,
        category: self.category,
        stock: self.stock,
        img: self.img,
        price: self.price
      })
      .then(log=>{
        var newData = self.list_data.map(function(data){
          if(data._id == self.id){
            data.isbn = self.isbn,
            data.title = self.title,
            data.author = self.author,
            data.category = self.category,
            data.stock = self.stock,
            data.img = self.img,
            data.price = self.price
            return data
          }else {
            return data
          }
        })

        console.log(newData);
        self.list_data = newData

        self.toggleModal()
      })
      .catch(err=>{
        console.log(err, 'ini error');
      })
    }
  },
  created:function(){
    var self = this
    axios.get('http://35.187.230.100:3000/book')
    .then(result=>{
      self.list_data = result.data
    })
    .catch(err=>{
      console.log(err);
    })
  }
})

$('.toggleModal').click(function(){
  alert('hai')
  // $('.modal').toggleClass('is-active')
})

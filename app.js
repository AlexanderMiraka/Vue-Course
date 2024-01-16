const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      lastName: '',
    };
  },
  computed: {//to print data
    fullName() {
      if(this.name==='') {
        return '';
      }
      return this.name + '' + 'test';
    },
  },
  watch: {
    counter(value) {//you don't have to specify the param because vue does it automatically
      if(value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        },2000);
      }
      this.fullName = value + this.lastName;
    },//whenever counter changes name is executed
  },
  methods: {//for event listeners it refreshes everytime anything changes on page.
    setName: function(event) {//default param for functions
        this.name = event.target.value;
    },
    submitForm: function() {
        console.log('kjgn');
    },
    add: function (num) {
        this.counter += num;
    },
    remove: function (num) {
        this.counter -= num;
    },
    resetInput: function () {
      this.name = '';
    },
  },
});

app.mount('#events');

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
    };
  },
  methods: {
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
  },
});

app.mount('#events');

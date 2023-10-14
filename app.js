const app = Vue.createApp({
    data: function() {
        return {
            courseGoal: 'Finish the course',
            vueLink:'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');//connect the created Vue App to the specific html section
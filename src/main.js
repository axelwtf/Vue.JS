let vm = new Vue({
    el: '#app',
    data: {
        message: 'salut les gens',
        persons: ['Xan', 'Xui', 'Mi']
    },
    methods: {
        addPerson: function () {
            this.persons.push(input.value)
        }
    },
});


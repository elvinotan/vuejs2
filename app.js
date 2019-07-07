new Vue({
    el: '#tutorial2', // Scope element
    data: {
        name: 'Vue JS 2 Tutorial',
    }
})

new Vue({
    el: '#tutorial3',
    data: {
       name: 'The Ninja Net',
       job: 'Youtuber'
    },
    methods: {
        greet(greet) {
            return 'Good '+greet+' '+this.name;
        }
    }
})

new Vue({
    el: '#tutorial4', 
    data: {
        name: 'Elvino Tan',
        website: 'http://www.google.com',
        websiteRef: "<a href='http://www.google.com'> Google </a>"
    }
})
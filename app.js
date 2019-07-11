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

new Vue({
    el: '#tutorial5',
    data: {
        age: 25,
        x: 0,
        y: 0,        
    },
    methods: {
        addAge(num) {
            this.age += num;
        },
        substractAge(num) {
            this.age -= num;
        },
        updateXY(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    }
})

new Vue({
    el: '#tutorial6',
    data: {
        age: 25,
        
    },
    methods: {
        addAge(num) {
            this.age += num;
        },
        openGoogle() {
            alert("You click Google link");
        }
    }
})


new Vue({
    el: '#tutorial7',
    methods: {  
        logName() {
            console.log('You enter name');
        },
        logAge() {
            console.log('You enter age')
        }
    }
})


new Vue({
    el: '#tutorial8',
    data: {  
        name:'',
        age:''
    }
})

new Vue({
    el: '#tutorial9',
    data: {  
        age: 20,
        a: 0, 
        b: 0,
    },
    methods: {
        mAddToA() {
            console.log('methodAddToA');
            return this.age + this.a;
        },
        mAddToB() {
            console.log('methodAddToB');
            return this.age + this.b;
        }
    },
    computed: {
        cAddToA() {
            console.log('computedAddToA');
            return this.age + this.a;
        },
        cAddToB() {
            console.log('computedAddToB');
            return this.age + this.b;
        }
    }
})

new Vue({
    el: '#tutorial10',
    data: { 
        color:false,
        bgcolor:false, 
    },
    computed: {
        computeClass() {
            return { color:this.color, bgcolor:this.bgcolor }
        }
    }
})

new Vue({
    el: '#tutorial11',
    data: { 
        error: true,
        success: false, 
    },
    computed: {
    }
})

new Vue({
    el: '#tutorial12',
    data: { 
        characters: ['Ken', 'Ryu', 'Blanka', 'Guild'],
        ninjas: [
            { name: 'Ken', age: 29 },
            { name: 'Ryu', age: 32 },
            { name: 'Blanka', age: 143 },
            { name: 'Guild', age: 35 },
        ],
    },
})

new Vue({
    el: '#tutorial13',
    data: { 
        health: 100,
        ended: false
    },
    methods: {
        punch() {
            console.log('Punch');
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart(){
            console.log('Restart');
            this.health = 100;
            this.ended = false;
        }
    },
    computed: {
        progress() {
            return this.health;
        }
    }
})

var aa = new Vue({
    el: '#tutorial14A',
    data: { 
        title: 'Title A',
    },
    computed: {
        greet() {
            return 'Greeting from A';
        },
    }
})

var bb = new Vue({
    el: '#tutorial14B',
    data: { 
        title: 'Title B',
    },
    methods: {
        changeTitleA() {
            aa.title = 'Replace Title on instance A';
        },
    },
    computed: {
        greet() {
            return 'Greeting from B';
        }
    }
})

bb.title = 'Replace Title on instance B from outside'

Vue.component('greeting', {
    template: `
        <div>
            <p>My Current Name is {{name}}</p>
            <button @click='changeName'>Change Name</button>
        </div>
    `,
    data() {
        return {name:'Elvino'}
    },
    methods: {
        changeName() {  
            this.name='Elvino Tan';
        }
    }
});

new Vue({
    el:'#tutorial15'
}) 


new Vue({
    el:'#tutorial16',
    data:{
        output: '.....Plese fill the textbox above',
    }, 
    methods: {
        submit() {
            console.log(this.$refs); //Get all refs
            this.output = this.$refs.food.value;
            this.$refs.foodDiv.innerText = this.output;
            this.$refs.greeting.name = this.output;
        }
    }
}) 

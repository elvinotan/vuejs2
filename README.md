# Vue JS 2 Tutorial
# Vue JS 2 Tutorial #01 - Introduction
```
What is Vue.js ?
- A font-end framework
- Create javascript drive web application
- Runs in the browser
- No need to make multiple server request for pages

Why Vue.js ?
- Very lean (16Kb)
- Very high run-time perfomance
```
# Vue JS 2 Tutorial #02 - The Vue Instance
```
Install Visual Studio Code Live Server untuk support autoreload
right-click at html file - Open with Live Server - Browser open automatically
```
```
new Vue({}) 
Vue Instance dalam suatu aplikasi bisa dalam bentuk :
- 1 Vue Instance yang mengatur semua bagian aplikasi
- Many Vue Instance dalam aplikasi, yang berperan di berbagai bagian 
```
```
<div id="tutorial2">
    <h1>{{ name }}</h1>
</div>     

new Vue({
    el: '#tutorial2', // Scope element
    data: {
        name: 'Vue JS 2 Tutorial',
    }
})
```
# Vue JS 2 Tutorial #03 - Data & Methods
Pada process pemanggilan method dapat meng-pass parameter</br>
Pada method untuk meng-access data, bisa langsung nama property tanpa menggunakan this.data, krn terdapat proxy
```
<div id="tutorial3">
    <h1>{{ greet('Morning') }}</h1>    
    <p>Name : {{ name }}</p>    
    <p>Job : {{ job }}</p>   
</div>

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
```
# Vue JS 2 Tutorial #04 - Data Binding
Cara melakukan 1 way Data Binding pada Vue, v-bind:{attribute} atau :{attribute}</br>
Cara meng-render html tag v-html={properties}
```
<div id="tutorial4">
    <a :href="website">Google</a>
    <input type='text' :value="name"/>
    <p v-html="websiteRef"></p>
</div>

new Vue({
    el: '#tutorial4', 
    data: {
        name: 'Elvino Tan',
        website: 'http://www.google.com',
        websiteRef: "<a href='http://www.google.com'> Google </a>"
    }
})
```
# Vue JS 2 Tutorial #05 - Events
Untuk binding event dilakukan dgn cara v-on:{eventtype} atau @{eventtype}</br>
Event bisa langsung memanipulasi property, ex: @click="age++"</br>
Event dapat passing parameter, ex: @dblclick="addAge(10)"
```
<div id="tutorial5">
    <button @click="age++">Add 1 Year Direct</button>
    <button @click="age--">Substract 1 Year Direct</button>
    <button @click="addAge(1)">Add 1 Year</button>
    <button @click="substractAge(1)">Substract 1 Year</button>
    <button @dblclick="addAge(10)">Add 10 Year</button>
    <button @dblclick="substractAge(10)">Add 10 Year</button>
    <p>My Age is {{ age }}</p>
    <div id="canvas" @mousemove="updateXY">{{x}},{{y}}</div>
</div>

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
```
# Vue JS 2 Tutorial #06 - Event Modifiers
Event Modifier berfungsi untuk memanipulasi fungsi event</br>
ex: @click.once="addAge(1)" hanya akan allow click sekali saja, untuk selanjutnya di block</br>
ex: @click.prevent="openGoogle" akan mencegah behaviour dari link yaitu buka browser</br>
Event modifier lainnya : .stop .prevent .capture .self .once .passive
```
<div id="tutorial6">
    <button @click.once="addAge(1)">Add 1 Year Direct</button>
    <p>My Age is {{ age }}</p>
    <a @click.prevent="openGoogle" href="http://www.google.com">Google</a>
</div>

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
```
# Vue JS 2 Tutorial #07 - Keyboard Events
@keyup.enter Hanya mentrigger method logName bila ada tombol enter yang di tekan</br>
@keyup.alt.enter Hanya mentrigger method logAge  bila tombol alt dan enter di tekan secara bersamaan</br>
Key Modifier lainnya: .enter .tab .esc .space .up .down .left .right .delete (captures both “Delete” and “Backspace” keys)</br>
```
<div id="tutorial7">
    <label>Name</label>    
    <input type="text" @keyup.enter="logName">     
    <label>Age</label>    
    <input type="text" @keyup.alt.enter="logAge">      
</div>

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
```
# Vue JS 2 Tutorial #08 - Two-Way Data Binding
Two way data binding dapat di terapkan dengan menggunakan tag v-model={property}</br>
Otomatis bila kita input data maka data property akan berubah dan yang menggunakan property tersebut juga akan berubah
```
<div id="tutorial8">
    <h5 style="color: red">Tutorial 8</h5>
    <label>Name</label>    
    <input type="text" v-model="name">
    <span>{{ name }}</span>  
    <br/>   
    <label>Age</label>    
    <input type="text" v-model="age">      
    <span>{{ age }}</span>
</div>  

new Vue({
    el: '#tutorial8',
    data: {  
        name:'',
        age:''
    }
})
```
# Vue JS 2 Tutorial #09 - Computed Properties
Computed Properties adalah hasil manipulasi dari suatu data yang tidak di persistence atau bersifat sementara</br>
Pada contoh di bawah saya menggunakan method dan juga computed properties, perbedaanya adalah, method tidak menyadari apabila properties di dalamnya berubah, initnya adalah method akan selalu run, sedangkan computed properties akan sadar apabila peroperty di dalam membernya berubah.</br>
Perhatikan console.log apabila saya click Add To A / Add To B maka method akan dijalankan ke dua-duanya dan ini sgt boros perfomance, berbeda dengan computed properties yang hanya jalan bila ada member di dalamnya berubah</br>

```
<div id="tutorial9">
    <h5 style="color: red">Tutorial 9</h5>
    <button @click="a++">Add To A</button>
    <button @click="b++">Add To B</button>
    <div>A = {{ a }}</div>
    <div>B = {{ b }}</div>
    <div>Method Age + A = {{ mAddToA() }}</div>
    <div>Method Age + B = {{ mAddToB() }}</div>
    <div>Computed Age + A = {{ cAddToA }}</div>
    <div>Computed Age + B = {{ cAddToB }}</div>            
</div> 

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
```
# Vue JS 2 Tutorial #10 - Dynamic CSS Classes
Logika dari Binding class adalah {key:value}</br>
{key} = Nama class dari css</br>
{value} = Boolean, bila true maka {key} akan di append pada class binding dan sebaliknya</br>
Karena Class binding berupa {key:value}, makan binding tidak bisa langsung pada properties, harus berupa object {}</br>
Contoh di bawah menggunakan binding dengan menggunakan Direct Object peroperties</br>
```<p :class="{color, bgcolor}">```</br>
atau menggunakan computed properties</br>
```<p :class="computeClass">```
```
<div id="tutorial10">
    <h5 style="color: red">Tutorial 10</h5>
    <button @click="color=!color">Add Class color</button>
    <button @click="bgcolor=!bgcolor">Add Class backgroundColor</button>
    <p :class="computeClass">Class Binding Using Computed</p>
    <p :class="{color, bgcolor}">Class Binding Using Direct Object Properties</p>
</div>

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
```
# Vue JS 2 Tutorial #11 - Conditionals
Conditional yang menentukan suatu tag di render atau tidak</br>
v-if, v-else, v-else-if : Menentukan suatu tag di render atau tidak (tidak di render tampilan dan dom)</br>
v-show : Menentukan suatu tag di render atau tidak (tetap ada di dom tetapi memiliki style display none)</br>
```
<div id="tutorial11">
    <h5 style="color: red">Tutorial 11</h5>
    <button @click="error=!error">Toggle Error</button>
    <button @click="success=!success">Toggle Success</button>
    <p v-if="error">Using v-if Error has accure</p>
    <p v-else-if="success">Using v-else-if Horeee sucesss processing</p>
    <p v-show="error">Using v-show Error has accure</p>
    <p v-show="success">Using v-show Horeee sucesss processing</p>
</div> 

new Vue({
    el: '#tutorial11',
    data: { 
        error: true,
        success: false, 
    },
    computed: {
    }
})
```
# Vue JS 2 Tutorial #12 - Looping with v-for
# Vue JS 2 Tutorial #13 - Simple Punchbag Game
# Vue JS 2 Tutorial #14 - Multiple Vue Instances
# Vue JS 2 Tutorial #15 - Intro to Components
# Vue JS 2 Tutorial #16 - Refs
# Vue JS 2 Tutorial #17 - The Vue CLI
# Vue JS 2 Tutorial #18 - Vue Files & The Root Component
# Vue JS 2 Tutorial #19 - Nesting Components
# Vue JS 2 Tutorial #20 - Component CSS (scoped)
# Vue JS 2 Tutorial #21 - Nesting Components Examples
# Vue JS 2 Tutorial #22 - Props
# Vue JS 2 Tutorial #23 - Primitive vs Reference Types
# Vue JS 2 Tutorial #24 - Events (child to parent)
# Vue JS 2 Tutorial #25 - The Event Bus
# Vue JS 2 Tutorial #26 - Life-cycle Hooks
# Vue JS 2 Tutorial #27 - Slots
# Vue JS 2 Tutorial #28 - Dynamic Components
# Vue JS 2 Tutorial #29 - Input Binding (Creating a blog, part 1)
# Vue JS 2 Tutorial #30 - Checkbox Binding
# Vue JS 2 Tutorial #31 - Select Box Binding
# Vue JS 2 Tutorial #32 - HTTP Requests
# Vue JS 2 Tutorial #33 - GET Requests
# Vue JS 2 Tutorial #34 - Custom Directives
# Vue JS 2 Tutorial #35 - Filters
# Vue JS 2 Tutorial #36 - Custom Search Filter
# Vue JS 2 Tutorial #37 - Registering Things Locally
# Vue JS 2 Tutorial #38 - Mixins
# Vue JS 2 Tutorial #39 - Setting up Routing
# Vue JS 2 Tutorial #40 - Hash vs History (Routing)
# Vue JS 2 Tutorial #41 - Adding Router Links
# Vue JS 2 Tutorial #42 - Route Parameters
# Vue JS 2 Tutorial #43 - Posting to Firebase
# Vue JS 2 Tutorial #44 - Retrieving Posts from Firebase
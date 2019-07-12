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
Pada contoh di bawah menjelaskan cara looping array, looping array of object dan looping properties</br>
di bawah juga di jelaskan cara mendapatkan index pads saat looping</br>
```
<div id="tutorial12">
<h5 style="color: red">Tutorial 12</h5>
<ul>
    <li v-for="(character, index) in characters">
        {{ index }} . {{ character }}
    </li>
</ul>
<ul>
    <li v-for="(ninja, index) in ninjas">
        {{ index }} . {{ ninja.name }} - {{ ninja.age }}
    </li>
</ul>
<template v-for="(ninja, index) in ninjas">
    <div>{{ index }} . {{ ninja.name }} - {{ ninja.age }}</div>
</template>
</br>
<template v-for="(ninja, index) in ninjas">
    <template v-for="(val, key) in ninja">
        <div>{{ key }} - {{ val }}</div>
    </template>                
</template>
</div>

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
```
# Vue JS 2 Tutorial #13 - Simple Punchbag Game
Untuk menerapkan apa yang sudah kita pelajari di bawah ini kita membuat simple game</br>
Mohon di perhatikan coding : </br>
- health = Kesahatan dari punch bug</br>
- ended = Game sudah selesai atau belum </br>
- punch() = Action pukul </br>
- restart() = Restart Game ke kondisi awal </br>
- progress() = Compute method untuk melihat progress health </br>

```
<div id="tutorial13">
    <h5 style="color: red">Tutorial 13</h5>
    <!-- Bag -->
    <div id="bag">
        <div v-if="!ended">Bag Ok</div>       
        <div v-if="ended">Bag Burst</div>         
    </div>
        <!-- Bag Health -->
    <div id="bag-health">
        <div>{{ progress }}</div>
    </div>
        <!-- Controls -->
        <div id="controls">
        <button @click="punch" v-if="!ended">Punch</button>
        <button @click="restart">Restart</button>
    </div>
</div>

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
```
# Vue JS 2 Tutorial #14 - Multiple Vue Instances
Vue Instance dalam 1 page bisa terdiri dari multiple, lihat contoh di bawah untuk property title, greet dan changeTitle event, satu sama lain tidak saling bersengolan. </br>
Antar Vue juga dapat berinteraksi melalui pointer dari vue instance, variable yang menyimpan vue instance ini bersifat global</br>
```
<div>
    <h5 style="color: red">Tutorial 14</h5>
    <div id="tutorial14A">
        <div>{{ title }}</div>
        <div>{{ greet }}</div>
    </div> 
    <div id="tutorial14B">
        <div>{{ title }}</div>
        <div>{{ greet }}</div>
        <button @click="changeTitleA">Change Title</button>
    </div>  
</div>

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
```
# Vue JS 2 Tutorial #15 - Intro to Components
Pada tahap ini kita akan masuk ke bagian component, reuseable component</br>
Sifat component adalah:</br>
- Nama component (argument pertama), akan menjadi nama html tag</br>
- Reuseable</br>
- State bersifat private dan tidak di share</br>
Berbeda dgn contoh di atas. Untuk component, bagian data harus berupa function yang mengembalikan object, artinya setiap instance component memiliki statenya sendiri, apabila bukan mengembalikan function maka state tersebut akan di share untuk semua komponent.</br>
Beberapa kendala dalam permbuatan komponent : </br>
a. Komponen tidak muncul : Komponen harus hidup di dalam instance Vue dia tidak dapat hidup tanpa container Vue</br>
b. Template html tidak ke render semua : Template harus mengembalikan 1 instance, pastikan semua tag di wrap jadi 1 tag</br>
```
<div id="tutorial15">
    <h5 style="color: red">Tutorial 15</h5>
    <greeting></greeting>
    <greeting></greeting>
</div>

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
```
# Vue JS 2 Tutorial #16 - Refs
Ref adalah pointer address, dgn ref kita dapat pointer dari tag/component, dan dari situ kita dapat access property, methods dll..</br>
Ref tidak hanya mengarah ke input component, ref juga dapat mengarah ke container ```<div>``` serta custom component</br>
```this.refs``` = akan mendapatkan seluruh pointers dalam container el (bagus sekali untuk validate all component)

```
<div id="tutorial16">
    <h5 style="color: red">Tutorial 16</h5>
    <input type="text" ref="food"/>
    <button @click="submit">Submit Food</button>
    <p>Your Favorite Food {{ output }}</p>
    <div ref="foodDiv">Favorite Food</div>
    <greeting ref="greeting"></greeting>
</div>

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
```
# Vue JS 2 Tutorial #17 - The Vue CLI
The Vue CLI </br>
Create a dev enviroment workflow with webpack</br>
- Use ES6 Feature</br>
- Compile & Minify our JS into 1 file</br>
- Use single file templates</br>
- Compile everything on our machine, not in the browser</br>
- Live reload dev server</br>

Step on install (see : https://github.com/vuejs/vue-cli)</br>
1. install node js</br>
2. install vue cli : npm install -g vue-cli</br>
3. create project : vue init <template-name> <project-name></br>
4. Example : vue init webpack-simple vuejs-playlist</br>
  After execute :</br>
  - cd vuejs-paylist</br>
  - npm install</br>
  - npm run dev</br>

# Vue JS 2 Tutorial #18 - Vue Files & The Root Component
Penjelasan mengenai basic template auto generate code :</br>
/src/assets : folder tempat meletakan images</br>
File js di bawah akan di run sebagai root application. Karena kita menggunakan ES6 maka kita menggunakan import untuk meng-import component, yang nanti akan di convert oleh babel into valina js</br>
Inti dari coding dibawah adalah, Vue instance mengarah ke #app sebagai container yang akan di isi oleh App.vue instance (#app berada di index.html)</br>
Kenapa main.js tidak ada di index.html kalo dia itu main entry ? krn kita menggunakan webpack yang akan mengcompile semua js menjadi 1 file yaitu build.js, dan build.js akan di geneate secara on the fly.</br>
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>vuejs-playlist</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/dist/build.js"></script>
  </body>
</html>

```
```
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
```

Standard dari *.vue file</br>
```
<template> // Html rendering
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script> // JS Logic
export default {
  data () {
    return {
      title: 'Your first Vue file, woooiiii',
    }
  },
  methods:{
    greeting() {
      return 'Heeeiiii, cowboy!!';
    }
  }
}
</script>

<style> // Tampilan style
</style>       
```

# Vue JS 2 Tutorial #19 - Nesting Components
Pada bagian ini kita akan membuat component, registerd it, and use it. Pada contoh di bawah kita membuat component ninjas yang berupa array nama dan menampilkannya</br> 
Ninja dapat di daftarkan dengan 2 cara </br>
a. global : Di daftarkan di level root, sehingga semua anak-anak yg merupakan scopenya dapat menggunakannya</br>
b. local : Di daftarakan di level component, sehingga hanya component tersebut yang dapat menggunaknannya</br>
```
<template>
    <div>
        <ul>
            <li v-for="(ninja, index) in ninjas" :key="ninja">{{index}}. {{ninja}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ninjas: ['Bayang Merah', 'Samurai X', 'Yu Gi Oh']
            }
        }
    }
</script>    

<style></style>
```

Pada contoh di bawah kita menggunakan component ninja dan mendaftarkannya secara local (jgn lihat ninjas-global dulu).</br>
Tahap-tahap menggunakan component local:</br>
a. Lakukan import Vue component pada bagian component. Ex : import Ninjas from './Ninjas.vue';</br>
b. Register it. Ex : components: {'ninjas-local':Ninjas }</br>
```
<template>
  <div>
    <div>{{title}}</div>
    <p>Contoh Component global Registered</p>
    <ninjas-global></ninjas-global>
    <p>Contoh Component local Registered</p>
    <ninjas-local></ninjas-local>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'; // Registering local component

export default {
  components: {
    'ninjas-local':Ninjas, // Registering local component
  },
  data () {
    return {
      title: 'Ninjas',
    }
  }
}
</script>

<style></style>
```

Pada contoh di bawah kita menggunakan component ninja dan mendaftarkannya secara global (untuk tempalate lihat pada bagian atas).</br>
Tahap-tahap menggunakan component global:</br>
a. Lakukan import Vue component, pada bagian root. Ex : import Ninjas from './Ninjas.vue';</br>
b. Register it. Ex : Vue.component('ninjas-global', Ninjas);</br>
```
import Vue from 'vue'
import App from './App.vue'
import Ninjas from './Ninjas.vue';

// Registering global component
Vue.component('ninjas-global', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})

```
# Vue JS 2 Tutorial #20 - Component CSS (scoped)
Pada bagian ini menjelaskan mengenai scope dari CSS, scope pada css terdapat 2 tipe :</br>
a. global : css bersifat global dan dapat gunakan oleh semua bagian.
b. local : css bersifat local dan hanya take effect pada specific component saja.
```
<style scoped> // Bersifat global
h1{
    color:green
}
</style>

<style scoped> // Bersifat local
h1{
    color:green
}
</style>
```
# Vue JS 2 Tutorial #21 - Nesting Components Examples
Pada contoh di bawah, menggunakan 3 component : header, ninjas dan footer</br>
Perhatikan cara menggunakan component di bawah ini, bila kurang jelas lihat bagian atas, ini adalah penerapan dari latihan-latihan di atas</br>
```
Header.vue
<template>
    <div>--- {{ title }} ---</div>    
</template>
<script>
    export default {
        data() {
            return {
                title: 'Header Title',                    
            }
        }
    }
</script>
<style scoped>
</style>
```
```
Ninjas.vue
<template>
    <div>
        <div v-for="ninja in ninjas" :key="ninja" @click="ninja.show = !ninja.show">
            <div>{{ ninja.name }}</div>
            <div v-show="ninja.show">{{ ninja.speciality }}</div>
        </div>
    </div>    
</template>
<script>
    export default {
        data() {
            return {
                title: 'Ninjas',
                ninjas: [
                    {name: 'Elvino', speciality: 'Programing', show: false},
                    {name: 'Carinnia', speciality: 'Database', show: false},
                    {name: 'Constantine', speciality: 'Drawing', show: false},
                ]
            }
        }
    }
</script>
<style scoped>
</style>
```
```
Footer.vue
<template>
    <div>--- {{ title }} ---</div>    
</template>
<script>
    export default {
        data() {
            return {
                title: 'Footer Title',
            }
        }
    }
</script>
<style scoped>
</style>
```
```
App.vue
<template>
  <div>
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas, 
  },
  data () {
    return {
      title: 'Ninjas',
    }
  }
}
</script>
```
# Vue JS 2 Tutorial #22 - Props
Props digunakan sebagai teknik passing data dari parent ke child</br>
Untuk passing prop kita menggunakan v-bind:{props name}={value} atau :{props name}={value}. Bila tidak menggunakan v-bind, maka data di anggap sebagai string.</br>
Untuk menerima props dari parent dapat dilakukan dgn cara:</br>
```props:['ninjas']``` namun cara ini kurang prakstis krn tidak ada validasi terhadap props tersebut</br>
```props:{ ninjas: { type: Array, required: true } }``` cara ini lebih baik, karena props akan di validasi, dan akan error bila tidak memenuhi kriteria validation</br>
Data props yang di passing oleh parent bisa di access kayaknya properties</br>
```
<template>
    <div>
        <div v-for="ninja in ninjas" :key="ninja" @click="ninja.show = !ninja.show">
            <div>{{ ninja.name }}</div>
            <div v-show="ninja.show">{{ ninja.speciality }}</div>
        </div>
    </div>    
</template>
<script>
    export default {
        props:{
            ninjas: { type: Array, required: true }
        },
        data() {
            return {
                title: 'Ninjas',                
            }
        }
    }
</script>

<app-ninjas :ninjas="ninjas"></app-ninjas>
```
# Vue JS 2 Tutorial #23 - Primitive vs Reference Types
Penting!!!!, Data props yang di passing dari parent ke child, ada 2 tipe yaitu Primitive dan Reference</br>
Primivite : String, Boolean, Number</br>
Reference : Array, Object</br>
Efek dari statement di atas adalah, bila pada level child mengubah data props primitive, maka data yang ada di parent tidak ada berubah, Sebaliknya bila level child mengubah data props reference, maka data yang ada di parent akan berubah, serta semua component yang menggunakan reference tersebut.</br>

# Vue JS 2 Tutorial #24 - Events (child to parent)
Pada contoh ini akan di demonstrasikan bagaimana caranya dari level child memenaggil event yang ada di parent</br>
a. Untuk memanggil event parent kita menggunakan command $emit, ex:```this.$emit('changeTitle', this.title);``` yang bermakna, panggil event parent yang bernama changeTitle, dgn mengirim data string this.title
b. Agar parent bisa menerima event yang di trigger dari child, maka perlu di deklarasikan. ex:```@changeTitle="gantiTitle($event)"```, yang bermakna, aku mendeklarasikan event changeTitle, silakan dipanggil, setelah di panggil aku akan panggil method local gantiTitle serta mengirim parameter yang di kirm oleh child
```
methods: {
    changeTitle() {
        this.title = 'Title Changed';
        this.$emit('changeTitle', this.title);
    }
}
```
```
<app-header :title="title" @changeTitle="changeTitle($event)"></app-header>
```
```
methods : {
    changeTitle(title) {
      this.title = title;
    }
}
```
# Vue JS 2 Tutorial #25 - The Event Bus
Kalo pada bab sebelumnya, kita menggunakan parent sebagai media perantara komunikasi antar child component, pada bab ini kita membahas komunikasi dengan menggunakan bus event</br>
Bus event hanyalah berupa vue instance yang di gunakan sebagai event traffic</br>
Cara penggunakan Bus Event:</br>
a. Create vue instance, lalu export agar bisa di gunakan oleh component yang trigger dan listen, ex: ```export const bus = new Vue({});```</br>
b. Import bus event dan trigger event di child component, ex: bus.$emit('titleChange', this.title);
c. Import bus event dan tangkap event di other child event, ex: ```bus.$on('titleChange', (data)=>{ this.title = data; })```

```
main.js
export const bus = new Vue({});
```
```
Header.vue
import { bus } from '../main';

methods: {
    changeTitle() {
        this.title = 'Title Changed';
        bus.$emit('titleChange', this.title);
    }
}
```
```
Footer.vue
import { bus } from '../main';

created() {
    bus.$on('titleChange', (data)=>{
        this.title = data;
    })
}
```
# Vue JS 2 Tutorial #26 - Life-cycle Hooks
```

```
# Vue JS 2 Tutorial #27 - Slots
```

```
# Vue JS 2 Tutorial #28 - Dynamic Components
```

```
# Vue JS 2 Tutorial #29 - Input Binding (Creating a blog, part 1)
```

```
# Vue JS 2 Tutorial #30 - Checkbox Binding
```

```
# Vue JS 2 Tutorial #31 - Select Box Binding
```

```
# Vue JS 2 Tutorial #32 - HTTP Requests
```

```
# Vue JS 2 Tutorial #33 - GET Requests
```

```
# Vue JS 2 Tutorial #34 - Custom Directives
```

```
# Vue JS 2 Tutorial #35 - Filters
```

```
# Vue JS 2 Tutorial #36 - Custom Search Filter
```

```
# Vue JS 2 Tutorial #37 - Registering Things Locally
```

```
# Vue JS 2 Tutorial #38 - Mixins
```

```
# Vue JS 2 Tutorial #39 - Setting up Routing
```

```
# Vue JS 2 Tutorial #40 - Hash vs History (Routing)
```

```
# Vue JS 2 Tutorial #41 - Adding Router Links
```

```
# Vue JS 2 Tutorial #42 - Route Parameters
```

```
# Vue JS 2 Tutorial #43 - Posting to Firebase
```

```
# Vue JS 2 Tutorial #44 - Retrieving Posts from Firebase
```

```
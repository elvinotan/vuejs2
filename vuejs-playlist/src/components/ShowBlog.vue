<template>
    <div>
        <div id='show-blog-component'> {{title}} </div>    
        <br/>
        <input type="text" v-model="search" placeholder="Input search"/>
        <br/>
        <div v-for="blog in searchBlog" :key="blog.id">
            <router-link :to="'/single/'+blog.id"><div v-rainbow>{{ blog.title | filter-uppercase }}</div></router-link>
            <article v-speccolor="'gray'">{{ blog.body | filter-snippet }}</article>
            <br/>
        </div>
    </div>
</template>
<script>
    import cariBlogs from '../mixins/SearchMixin';

    export default{
        el: '#show-blog-component',
        data() {
            return {
                title: 'List Of Blogs',
                blogs: [],
                search: ''
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => this.blogs = data.slice(0,10));
        },
        computed: {
        }, 
        filters: {
            filterUppercase(value) {
                return value.toUpperCase();
            },
            filterSnippet(value) {
                return value.slice(0, 100)+'...';
            }
        },
        directives: {
            'speccolor':{
                bind(el, binding, vnode) {
                    el.style.color = binding.value;
                }
            },
            'rainbow': {
                bind(el, binding, vnode) {
                    el.style.color = '#'+Math.random().toString().slice(2,8);
                }
            }
        },
        mixins: [cariBlogs]
    }
</script>

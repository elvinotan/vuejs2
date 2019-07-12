<template>
    <div>
        <div id='show-blog-component'> {{title}} </div>    
        <br/>
        <input type="text" v-model="search" placeholder="Input search"/>
        <br/>
        <div v-for="blog in searchBlog" :key="blog.id">
            <div v-rainbow>{{ blog.title | filter-uppercase }}</div>
            <article v-speccolor="'black'">{{ blog.body | filter-snippet }}</article>
            <br/>
        </div>
    </div>
</template>
<script>
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
            searchBlog() {
                return this.blogs.filter(e=>{
                    if (this.search == '') return true;
                    return e.title.match(this.search);
                })
            }
        }        
    }
</script>

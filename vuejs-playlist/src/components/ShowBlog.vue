<template>
    <div>
        <div id='show-blog-component'> {{title}} </div>    
        <div v-for="blog in blogs" :key="blog.id">
            <div>{{ blog.title }}</div>
            <article>{{ blog.body }}</article>
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
                blogs: []
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(data => this.blogs = data.slice(0,10));
        }        
    }
</script>

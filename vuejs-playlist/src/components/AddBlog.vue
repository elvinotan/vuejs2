<template>
    <div>
        <form v-if="!submitted">
            <div>Blog Title</div>
            <div><input type='text' v-model.lazy="blog.title"></div>
            <div>Blog Content</div>
            <div><input type='text' v-model.lazy="blog.content"></div>
            <div>Programer : <input type='checkbox' value="Programer" v-model="blog.categories"/></div>
            <div>Database : <input type='checkbox' value="Database" v-model="blog.categories"/></div>
            <div>Tester : <input type='checkbox' value="Tester" v-model="blog.categories"/></div>
            <div>Blog Author</div>
            <div>
                <select v-model="blog.author">
                    <option v-for="author in authors" :key="author" :value="author">{{author}}</option>
                </select>
            </div>
            <button @click.prevent="save">Save</button>
        </form>    
        <div v-if="submitted">
            <div>Preview</div>
            <div>Blog Title</div>
            <div>{{ blog.title }}</div>
            <div>Blog Content</div>
            <div>{{ blog.content }}</div>
            <div>Blog Categories</div>
            <div v-for="category in blog.categories" :key="category">
                <div>{{category}}</div>
            </div>
            <div>Author</div>
            <div>{{ blog.author }}</div>
            <p>Thank you for saving </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                blog: { title:'', content:'', categories: [], author:'' },
                authors: ['Burger', 'Pizza', 'Lasagna'],
                submitted: false,
            }
        },
        methods : {
            save() {
                this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                    title: this.blog.title,
                    body: this.blog.content,
                    userId:1
                }).then(res=> res.json())
                .then(json => json)
                .then(json => this.submitted = true);
            }
        }
    }
</script>

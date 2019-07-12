<template>
    <div>
        <div>Blog Title</div>
        <div><input type='text' v-model.lazy="blog.title"></div>
        <div>Blog Content</div>
        <div><input type='text' v-model.lazy="blog.content"></div>
        <div>Programer : <input type='checkbox' value="Programer" v-model="blog.categories"/></div>
        <div>Database : <input type='checkbox' value="Database" v-model="blog.categories"/></div>
        <div>Tester : <input type='checkbox' value="Tester" v-model="blog.categories"/></div>
        <div>--------------------</div>
        <div>Preview</div>
        <div>Blog Title</div>
        <div>{{ blog.title }}</div>
        <div>Blog Content</div>
        <div>{{ blog.content }}</div>
        <div>Blog Categories</div>
        <div v-for="category in blog.categories" :key="category">
            <div>{{category}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                blog: { title:'', content:'', categories: [] }
            }
        }
    }
</script>

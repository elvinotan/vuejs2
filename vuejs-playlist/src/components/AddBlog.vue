<template>
    <div>
        <div>Blog Title</div>
        <div><input type='text' v-model.lazy="blog.title"></div>
        <div>Blog Content</div>
        <div><input type='text' v-model.lazy="blog.content"></div>
        <div>--------------------</div>
        <div>Preview</div>
        <div>Blog Title</div>
        <div>{{ blog.title }}</div>
        <div>Blog Content</div>
        <div>{{ blog.content }}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                blog: { title:'', content:'' }
            }
        }
    }
</script>

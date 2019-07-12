<template>
    <div>
        <div><b>{{ blog.title }}</b></div>
        <article>{{ blog.body }}</article>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                blog: {}
            }
        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
            .then(data => data.json())
            .then(data => this.blog = data);
        }
    }
</script>
<style>
</style>
<template>
    <div @click="changeTitle">--- {{ title }} ---</div>    
</template>
<script>
    export default {
        props: {
            title : { type: String }
        },
        data() {
            return {
                title: 'Header Title',                    
            }
        },
        methods: {
            changeTitle() {
                this.title = 'Title Changed';
                this.$emit('changeTitle', this.title);
            }
        }
    }
</script>
<style scoped>
</style>
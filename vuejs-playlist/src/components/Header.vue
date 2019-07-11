<template>
    <div @click="title='Change title'">--- {{ title }} ---</div>    
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
        }
    }
</script>
<style scoped>
</style>
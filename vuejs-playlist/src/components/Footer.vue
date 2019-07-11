<template>
    <div>--- {{ title }} ---</div>    
</template>
<script>
    export default {
        props: {
            title : { type: String }
        },
        data() {
            return {
                title: 'Footer Title',
            }
        }
    }
</script>
<style scoped>
</style>
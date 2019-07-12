<template>
    <div>--- {{ title }} ---</div>    
</template>
<script>
    import { bus } from '../main';
    export default {
        props: {
            title : { type: String }
        },
        data() {
            return {
                title: 'Footer Title',
            }
        },
        created() {
            bus.$on('titleChange', (data)=>{
                this.title = data;
            })
        }
    }
</script>
<style scoped>
</style>
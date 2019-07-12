<template>
    <div @click="changeTitle">--- {{ title }} ---</div>    
</template>
<script>
    import { bus } from '../main';

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
                // this.$emit('changeTitle', this.title);
                bus.$emit('titleChange', this.title);
            }
        }
    }
</script>
<style scoped>
</style>
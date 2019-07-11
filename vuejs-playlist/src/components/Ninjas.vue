<template>
    <div>
        <div v-for="ninja in ninjas" :key="ninja" @click="ninja.show = !ninja.show">
            <div>{{ ninja.name }}</div>
            <div v-show="ninja.show">{{ ninja.speciality }}</div>
        </div>
    </div>    
</template>
<script>
    export default {
        props:{
            ninjas: { type: Array, required: true }
        },
        data() {
            return {
                title: 'Ninjas',                
            }
        }
    }
</script>
<style scoped>
</style>
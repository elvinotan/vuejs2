<template>
    <div>
        <div v-for="ninja in ninjas" :key="ninja" @click="ninja.show = !ninja.show">
            <div>{{ ninja.name }}</div>
            <div v-show="ninja.show">{{ ninja.speciality }}</div>
        </div>
        <button @click="ninjas.pop()">Delete</button>
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
        },
        beforeCreate(){
            alert('BeforeCreate');
        },
        created(){
            alert('Create');
        }, 
        beforeMount() {
            alert('BeforeMount');
        },
        mounted(){
            alert('Mounted');
        },
        beforeUpdate() {
            alert('BeforeUpdate');
        },
        updated() {
            alert('Updated');
        }
    }
</script>
<style scoped>
</style>
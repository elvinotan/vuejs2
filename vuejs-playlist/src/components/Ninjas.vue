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
        data() {
            return {
                title: 'Ninjas',
                ninjas: [
                    {name: 'Elvino', speciality: 'Programing', show: false},
                    {name: 'Carinnia', speciality: 'Database', show: false},
                    {name: 'Constantine', speciality: 'Drawing', show: false},
                ]
            }
        }
    }
</script>
<style scoped>
</style>
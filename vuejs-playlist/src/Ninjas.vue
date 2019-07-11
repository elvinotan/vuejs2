<template>
    <div>
        <h1>List of Ninja</h1>
        <ul>
            <li v-for="(ninja, index) in ninjas" :key="ninja">{{index}}. {{ninja}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ninjas: ['Bayang Merah', 'Samurai X', 'Yu Gi Oh']
            }
        }
    }
</script>    

<style scoped>
h1{
    color:green
}
</style>
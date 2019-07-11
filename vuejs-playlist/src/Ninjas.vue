<template>
    <div>
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

<style></style>
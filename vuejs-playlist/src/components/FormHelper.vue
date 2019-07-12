<template>
    <div>
        <h1>Please Fill The Forms</h1>
        <slot name="form-header"></slot>
        <slot name="form-body"></slot>
        <slot name="form-footer"></slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headerTitle:'Try to overwrite slot but it not working',
                bodyTitle:'Try to overwrite slot but it not working',
                footerTitle:'Try to overwrite slot but it not working',
            }
        }
    }
</script>

<style scoped>
    h1 { color:green }
</style>
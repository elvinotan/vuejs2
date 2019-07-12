<template>
    <nav>
        <ul>
            <li><router-link to='/' exact>Home</router-link></li>
            <li><router-link to='/add' exact>Add Blogs</router-link></li>
        </ul>    
    </nav>
</template>
<script>
</script>
<style>
.router-link-active {
    color:green;
    background-color: grey
}
</style>
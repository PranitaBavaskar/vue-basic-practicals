<template>
    <div class="child">
        <h1>Child component</h1>
        <h3 v-for="user in users" :key="user.name">
            {{user.name}}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'childcompo',
    props:['users']//we use name for single line transfer
}
</script>

<style scoped>
.child {
    background-color: #fcd98d;
    height: 100px;
    width: 300px;
    padding: 42px;
    margin: 20px ;
}
</style>



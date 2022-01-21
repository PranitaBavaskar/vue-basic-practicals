<template>
    <div>
        <h1>2 way data binding</h1>
        <input type="text" v-model="data">
        <h2>{{data}}</h2>
    </div>
</template>
<script>
export default {
    name:'twowayDataBinding',
    data(){
        return {
            data:0
        }
    }
}
</script>
<style scoped>
h1{
    color: orange;
}
</style>
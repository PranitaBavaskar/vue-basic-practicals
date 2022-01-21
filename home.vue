<template>
<div>
    <h1>Hello world</h1>
    <h2>{{data}}</h2>
    <h2>{{msg}}</h2>
</div>
    
</template>

<script>
export default {
    name: 'home',
    props:{
        data: String,
        msg: String
        }
}
</script>
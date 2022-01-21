<template>
    <div>
        <h1>Parent component</h1>
        <childcompo />
    </div>
</template>

<script>
import childcompo from "./childcompo.vue"
export default {
    name: 'composing',
    components:{
        childcompo
    }
}
</script>

<style scoped>
div{
    background-color: #a6ddeb;
    height: 300px;
}
</style>



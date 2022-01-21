<template>
    <div>   
        <h1 class="vueStyle">classANDstyleBindings</h1>
        <h1 v-bind:style="{color:colorName}">styleBindings</h1>
        <h1 v-bind:style="{color:'red'}">Bindings</h1>
        <h1 v-bind:class="{display:show,vueStyle:show}">class with object</h1>
        <h1 v-bind:class="['display','vueStyle']">class with Array</h1>
        <h1 v-bind:class="[d,v]">class with Array using property</h1>
        <h1 v-bind:class="[checkDisplay?d:v]">class with Array using conditional property</h1>




    </div>    
</template>


<script>
export default {
    name: 'classANDstyleBindings',
    data()
    {
        return {
            colorName: 'skyblue',
            show: true,
            d:'display',
            v:'vueStyle',
            checkDisplay: true
            }
    }
}
</script>


<style scoped>
.vueStyle{
    color: orange;
}
.display{
    background-color: lightgreen;
    padding:5px ;
}
</style>
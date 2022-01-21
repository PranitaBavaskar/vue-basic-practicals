<template>
    <div>
        <button v-on:click="updateTitle">UpdateTitle</button> 
    </div>
</template>
<script>
export default {
    name:'propsChildtoParent',
    methods:{
        updateTitle(){
           this.$emit('changeTitle','Props has been passed');
        }
    }

}
</script>
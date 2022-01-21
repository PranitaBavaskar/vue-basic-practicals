<template>
    <div>
        <p v-html="rowHtml"></p>
        <!--<h1>Template in vue js</h1>-->
        <h3>{{name}}</h3>
        <h3 v-once>{{name}}</h3>
        <h3>{{a+b}}</h3>
        <h3>{{ok?"yes":"no"}}</h3>
        <button v-on:click="updateText">click here</button><br><br>
        <button v-bind:disabled="disablebtn" >"disablebtn when true"</button>
    </div>
</template>

<script>
export default {
    name: "templatee",
    data(){
        return {
            name:'Before button click',
            a:10,
            b:20,
            ok:false,
            rowHtml:'<h1><i>Template in vue js</i></h1>',
            disablebtn:true

        }
    },
   methods:{
       updateText(){
           this.name='After button click'
           this.ok=!this.ok
       }
   }
}
</script>
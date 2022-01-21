<!--
<template>
    <div>
        <h1 v-if="show">Conditional rendering if block for true</h1>
        <h1 v-else>"conditional-rendering else block for false" </h1> 
        <button v-on:click="display">Toggle Elements</button>
    </div>
</template>

<script>
export default {
    name: 'loops',
    props: {},
    data() { 
        return{show: true} 
        },
    methods:{
        display()
        {
            this.show = !this.show
        }
        }
}
</script>
-->
<template>
    <div>
        <h1>For Loops in vuejs</h1>
        <table border="1px">
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
            </tr>

             <tr v-for="persons in users" :key="persons.id">
                <td>{{persons.id}}</td>
                <td>{{persons.name}}</td>
                <td>{{persons.emailid}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'loops',
    props: {},
    data() { 
        return{
            users:[
                {id:1,name: 'peater',emailid: 'peater@'},
                {id:2,name: 'john',emailid: 'john@'},
                {id:3,name: 'harry',emailid: 'harry@'},
                {id:4,name: 'lucy',emailid: 'lucy@'},
                {id:5,name: 'parker',emailid: 'parker@'},                
            ]
        } 
        },
}
</script>
<template>
    <div>
        <label>Name</label>
        <input type="text" v-model="person.name">
        <br><br>
        <label>user</label>
        <input type="text" v-model="person.user">
        <br><br>
        <button v-on:click="submit">Add</button>
        <br><br>
        <table>
            <tr>
                <th>name:</th>
                <br>
                <th>user:</th>
            </tr>
            <tr v-for="person in persons" :key="person">
                <td>
                    {{person.name}}
                    {{person.user}}
                </td>
            </tr> 
        </table>
    </div>
</template>
<script>
export default {
    name: 'tableRec',
    data(){
        return {
            person: { 
                name : '',
                user : ''
            },
            persons:[]
        }
    },
    methods: {
        submit(){
            if (!this.person.name){
                alert("name invalid");
            }
            else{
                alert("done")
            }
            this.persons.push(this.person)//add person data in persons
        }
    }
}
</script>
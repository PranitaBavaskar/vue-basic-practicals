<template>
<div>
        <h1>Welcome to second page</h1>
        <p>Team id is {{ $route.params.teamid }}</p>
        <button @click="gohome">home</button>
</div>
</template>
<script>
export default {
    name: 'secondpg',
    watch:
    {
  //      '$route'(to)
   //     {
  //          alert(to.params.teamid)
   //     }
    },
    created()
    {
  //      alert(this.$route.params.teamid)
    },
    methods:{
        gohome(){
            this.$router.push('/')
        }

    }
    }
    

</script>
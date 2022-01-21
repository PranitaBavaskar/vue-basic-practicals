<template>
  <div id="app">
   <!--<img alt="Vue logo" src="./assets/practicepro.png">-->
           <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- <hr> 
    <router-link to="/">home </router-link>
    <router-link to="/secondpg/10">wlcm1 </router-link>
    <router-link to="/secondpg/100">wlcm2 </router-link>

    <hr>
    <router-view>    </router-view> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> 

    <home /> 
    <home />
    <home data="Welcome to Your Vue.js App from passing props" msg = "Welcome to your Vue with 2nd parameter"/> --> <!-- add copy of home.vue --> 
    <!--
    <btnevent />
    <loops />
    <composing />
    <templatee />
    -->
    <!-- <classANDstyleBindings /> -->
    <!-- <dataBindings /> -->
    <!-- <twowayDataBinding/> -->
    <!-- <propsChildtoParent v-on:changeTitle="updateTitleText($event)"/> -->
    <!-- <childcompo name="Welcome to child component"/> without return name-->
    <!-- <childcompo v-bind:users=users />we can write name at users -->
    <!-- <h1>{{title | Ucase}}</h1>
    <pipeFilters /> -->
    <tableRec/>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
// import home from './components/home.vue'
// import btnevent from './components/btnevent.vue'
// import loops from './components/loops.vue'
// import composing from './components/composing.vue'
// import Templatee from './components/templatee.vue'
// import wlcomepg from './components/wlcomepg.vue'
// import classANDstyleBindings from './components/classANDstyleBindings.vue'
// import dataBindings from './components/dataBindings.vue'
// import twowayDataBinding from './components/twowayDataBinding.vue'
// import propsChildtoParent from './components/propsChildtoParent.vue'
// import childcompo from './components/childcompo.vue'
// import pipeFilters from './components/pipeFilters.vue'
import tableRec from './components/tableRec.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // home,
    // btnevent,
    // loops,
    // composing,
    // Templatee,
    // classANDstyleBindings
    // dataBindings
    // twowayDataBinding
    // propsChildtoParent
    // childcompo
    // pipeFilters
    tableRec

  },
  data(){
    return {
      title: "Props child to parent",
      name:'Welcome to child component',
      users:[
        {name:'Admin',email:'admin@example.com'},
        {name:'Sam',email:'sam@example.com'},
        {name:'Peter',email:'peter@example.com'},
        {name:'Bruce',email:'bruce@example.com'}

        ]
    }
  },
  methods:{
    updateTitleText(title){
      this.title=title;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

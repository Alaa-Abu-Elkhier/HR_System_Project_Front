<template>
  <div id="app">
    <router-view></router-view>
   <!-- <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <a href="#" v-on:click=" component='Add'">Add</a>
    <button type="button" v-on:click=" component='Add'">Add</button>
    <button type="button" v-on:click=" component='Get'">Get</button>
    <button type="button" v-on:click=" component='LogIn'">LogIn</button>
    <button type="button" v-on:click=" component='search'">LogIn</button>-->
     
  
    
    
      
    
    
  </div>
</template>

<script>
import Get from './components/Get'
import Add from './components/Add'


import search from './components/search'




export default {
  name: 'app',
  components: {
    'Get':Get,
    'Add':Add,
    
   'search': search,
   
    
   
  },
  data() {
    return {
      component:'',
      name:'',
     
    }
  },
  methods:{
   
  }
  

}
</script>

<style>
body
{
	
	margin:0;
	padding:0;
	background: url('./assets/background.jpg');
	font-family: sans-serif; 
}

</style>

<template>
<div>
    
    	<div>
		<img src="../assets/Home.png" class="img">
		</div>
        
    
    
        
        
     <div class="Nav">
        <ul>
        <li><router-link to="/add"><b>Add  Employee</b></router-link></li>
        <li><router-link to="/update"><b>Update  Employee</b></router-link></li>
        <li><router-link to="/delete"><b>Delete  Employee</b></router-link></li>
        <li><router-link to="/search"><b>Search For  Employee</b></router-link></li>
        <li><router-link to="/get"><b>Show All Emolyees</b></router-link></li>
        <li><router-link to="/"><b>LogOut</b></router-link></li>
        
        </ul>

    </div>






   
</div>

    
</template>

<script>
const axios = require('axios');
export default {
    name:"Home",
    data() {
        return {
            
        }
    },
    methods:{
       
        

    },
    
       
               
    
    
}
</script>
<style>
.img
{
	width:1000px;
	height:1000px; 
	overflow:hidden;
	position:absolute;
	transform: translate(90%,-2%);
}
h1{
    font-style: italic;
    
    color:#063d74
}


ul {
  list-style-type: none;
  margin: 0;
  padding: 22px;
  padding-bottom:10px;  
  height: 550px;
  width: 430px;
  background-color: #f1f1f1;
  transform: translate(60%,35%);
  border-radius: 20px;
  
}

li a {
  display: block;
  color: #000;
  padding: 25px 16px;
  padding-bottom: 30px;
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  font-style: italic;
 /* background-color:#6d6d6d;
  border-radius: 20px;*/
  
}

/* Change the link color on hover */
li a:hover {
  background-color:#59a3f8;
  color: white;
  border-radius: 20px;

}
/*.active {
  background-color: #4CAF50;
  color: rgb(41, 35, 35);
}*/


</style>



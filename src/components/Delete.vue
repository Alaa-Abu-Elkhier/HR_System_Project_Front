<template>
 
    <div>
        
        <div class="del">

            <form autocomplete="off">
                    <p>Empolyee Name</p>
                    <input v-model="info.name" type="text" name = "" required>
                    <button type="button" v-on:click="delet">Delete</button> 
					<div class="home">
					<button type="button"><router-link to="/home">Home</router-link></button>
					</div>
   
            </form>
        </div>
		
		
		
    </div>

</template>

<script>

import router from '../router'
const axios = require('axios');

export default {
	name:"Form",
	
	data() {
			return {
				status:"",
                  info: {
                    name: ''
                  }
			}
	},
   
	methods: {
			
			delet(){            
                
                name = this.info.name ;
				
				axios.delete(`http://localhost:8000/api/employees/${name}`)
				.then(function(response){
                    console.log(response)
                      alert("Delete Successfully");
				})
				.catch(function(error){
                  console.log(error.response);
                  alert(error.response.data);
				})
			},		
		},


}
</script>
<style>

.del
{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-185%, -50%);
	width:500px;
	height:550px;
	padding:80px 40px;
	box-sizing: border-box;
 background:rgb(252, 251, 251) ;;
	
	
	border-radius: 10px;
	
}

.del p
{
	padding:0;
	margin:0;
	font-weight:bold;
	color:rgb(46, 93, 131);
	font-size: 22px;
} 


.del input
{
	width:100%;
	margin-bottom: 20px; 
}

.del input[type="text"], .loginBox input[type="text"]
{
	border: none;
	border-bottom: 1px solid rgb(46, 93, 131);
	background: transparent;
	outline:none;
	height:45px;
	color:rgb(71, 64, 64);
	font-size: 18px;	
}

.del button
{
	border:none;
	outline:none;
	height: 40px;
	width: 110px;
	color:#fff;
	font-size:16px;
	background: rgb(255,38,126);
	cursor:pointer;
	border-radius:20px;
	text-decoration: none;
}
button:hover{
	background: #efed40;
	color: #262626;

}
.home{
	transform: translate(0%, 30%);

}

</style>



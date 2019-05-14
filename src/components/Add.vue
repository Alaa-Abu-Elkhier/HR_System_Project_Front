<template>
 
<div>
    
		<div class="positon">
		<img src="../assets/add.png" class="img">
		</div>
	
     <div class="Box">
			 
			 


              <form autocomplete="off">
                  <p>Empolyee Name</p>
                  <input v-model="info.name" type="text" name = "" required>
									<p>E-mail</p>
                  <input v-model="info.e_mail" type="text" name = "" required>
										<p>Password</p>
                  <input v-model="info.password" type="password" name = "" required>
									
                  <div class="inputbox">
										<p>Department</p>
				
										<select v-model="info.department" >
											
												<option value="manager">Manager</option>
												<option value="it">It</option>
												<option value="workers">Workers</option>
										</select>
											<p>Position</p>
				
										<select v-model="info.position" >
											
												<option value="manager">Manager</option>
												<option value="it">It</option>
												<option value="workers">Workers</option>
										</select>
										

										</div>
										<p>Project</p>
                  <input v-model="info.project" type="text" name = "" required>
									<p>Salary</p>
                  <input v-model="info.salary" type="text" name = "" required>
									 
				  				<!--<button type="button" v-on:click="post">Add</button>-->
								
									
								<input type="submit" v-on:click="post" value="Add">
								
								
				  
				  
  
                  
               </form>
							 <div>
								<button type="submit"><router-link to="/home">Home</router-link></button>
								</div>
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
                    name: '',	
										department:'',
										project:'',
										salary:'',
										e_mail:'',
										password:'',
										position:'',
                  }
			}
		},
   
	methods: {
				
			submit(){
				router.push({ name: "LogIn" });
			
			
			},
			

			
			post(){
				
				
				axios.post('http://localhost:8000/api/employees',{ 
					name: this.info.name,
					department:this.info.department,
					project:this.info.project,
					salary:this.info.salary,
					e_mail:this.info.e_mail,
					password:this.info.password,
					position:this.info.position,
				
					})
			    .then(function(response){
					
					console.log(response);
					alert("Employee Added Successfully");
					location.reload();
					
					
					

				})
				.catch(function(error)
				{
					console.log(error.response);
					alert(error.response.data);
				})
				
									

			},
		
					
    },
	
    
}
</script>
<style>
.img
{
	width:950px;
	height:950px; 
	overflow:hidden;
	position:fixed;
	transform: translate(90%,-12%);
}
.positon
{
	position: fixed
}



.Box
{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-185%, -50%);
	width:500px;
	height:900px;
	padding:80px 40px;
	box-sizing: border-box;
 background:rgb(252, 251, 251) ;;
	
	
	border-radius: 10px;
	
}

.Box p
{
	padding:0;
	margin:0;
	font-weight:bold;
	color:rgb(46, 93, 131);
	font-size: 22px;

	
} 


.Box input
{
	width:100%;
	margin-bottom: 20px; 
}

.Box input[type="text"], .loginBox input[type="text"]
{
	border: none;
	border-bottom: 1px solid rgb(46, 93, 131);
	background: transparent;
	outline:none;
	height:45px;
	color:rgb(71, 64, 64);
	font-size: 18px;
	
	
}
.Box input[type="password"], .loginBox input[type="password"]
{
	border: none;
	border-bottom: 1px solid rgb(46, 93, 131);
	background: transparent;
	outline:none;
	height:45px;
	color:rgb(71, 64, 64);
	font-size: 18px;
	
	
}


.Box input[type="submit"]
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
}


.Box input[type="submit"]:hover
{
	background: #59a3f8;
	color:rgb(252, 251, 251) 
}
.Box button
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
a {
  
  text-decoration: none;
	color:#fff;
}
button:hover{
	background: #59a3f8;
	color: #262626;

}
 a {
  
  text-decoration: none;
}


	

	

 
 

</style>



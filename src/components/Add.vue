<template>
 
<div>
    <h1>this Add component</h1>
		<div>
		<img src="../assets/add.png" class="img">
		</div>
	
     <div class="Box">
			 
			 <span class="form-heading"></span>


              <form>
                  <p>Empolyee Name</p>
                  <input v-model="info.name" type="text" name = "" required>
                  <p>Department</p>
                  <input  v-model="info.Department" type="text" name = "" >
									 <p>Age</p>
                  <input v-model="info.Age" type="text" name = "" required>
				  				<button type="button" v-on:click="post">Add</button>
								
									
								<!--	<input type="submit">-->
				  
				  
  
                  
               </form>
            </div>
</div>

    
</template>

<script>
const axios = require('axios');

export default {
	name:"Form",
	
	data() {
			return {
				status:"",
                  info: {
                     name: '',
                     ID:null,
                     Department: '',
                     Position:'',
                     Salary: null,
                     overTimehours: '',
                     Adress:'',
                     Phone: null,
                     birthDate: null,
                     Email: '',
										 Age:null,
                  }
			}
		},
   
	methods: {
				
			submit(){
				console.log("Done");
			
			},
			

			
			post(){
				console.log(this.info.Age);
				axios.post('http://localhost:3000/Hr-System',{ 
					name: this.info.name,
					Department: this.info.Department, })
			    .then(function(response){
					console.log(response);

				})
				.catch(function(error)
				{
					console.log(error);
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
	position:absolute;
	transform: translate(90%,-12%);
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


.Box input[type="submit"]
{
	border:none;
	outline:none;
	height: 40px;
	color:#fff;
	font-size:16px;
	background: rgb(255,38,126);
	cursor:pointer;
	border-radius:20px;
}


.Box input[type="submit"]:hover
{
	background: #efed40;
	color: #262626;
}
.Box button
{
	border:none;
	outline:none;
	height: 40px;
	color:#fff;
	font-size:16px;
	background: rgb(77, 146, 236);
	cursor:pointer;
	border-radius:20px;
}
button:hover{
	background: #efed40;
	color: #262626;

}

	

	

 
 

</style>



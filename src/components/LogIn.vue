<template>
<div>
    
    	<div>
		<img src="../assets/login.png" class="img">
		</div>
        <div class="box">
			 
			 


              <form autocomplete="off">
                  
									<p>E-mail</p>
                  <input v-model="info.e_mail" type="text" name = "" required>
										<p>Password</p>
                  <input v-model="info.password" type="password" name = "" required>
              </form>	
              <input type="submit" v-on:click="post" value="LogIn">				
    
   </div>







   
</div>

    
</template>

<script>
import router from '../router'
const axios = require('axios');
export default {
    name:"LogIn",
    data() {
        
        return {
            
            info:{
            e_mail:'',
            password:'',
            }
        }
    },
    methods:{
    
    post()
    {  
        axios.post('http://localhost:8000/api/login',{
            e_mail: this.info.e_mail,
            password: this.info.password,
            
        })
        .then(function(response){
            
            console.log(response);
           
            window.location.href = 'http://localhost:8080/?#/home'
			
        })
        .catch(function(error)
				{   
                    console.log(error.response);
                    
					alert(error.response.data);
					
				})

       


    }   
    }
    
    
               
    
    
}
</script>
<style>
.img
{
	width:1035px;
	height:1035px; 
	overflow:hidden;
	position:absolute;
	transform: translate(90%,-8%);
}
.box
{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-185%, -50%);
	width:500px;
	height:550px;
	padding:80px 40px;
	box-sizing: border-box;
 background:rgb(251, 251, 251) ;;
	
	
	border-radius: 10px;
	
}
.box p
{
	padding:0;
	margin:0;
	font-weight:bold;
	color:rgb(46, 93, 131);
	font-size: 22px;

	
} 
.box input
{
	width:100%;
	margin-bottom: 20px; 
}

.box input[type="text"], .loginBox input[type="text"]
{
	border: none;
	border-bottom: 1px solid rgb(46, 93, 131);
	background: transparent;
	outline:none;
	height:45px;
	color:rgb(71, 64, 64);
	font-size: 18px;
	
	
}
.box input[type="password"], .loginBox input[type="password"]
{
	border: none;
	border-bottom: 1px solid rgb(46, 93, 131);
	background: transparent;
	outline:none;
	height:45px;
	color:rgb(71, 64, 64);
	font-size: 18px;
	
	
}


.box input[type="submit"]
{
	border:none;
	outline:none;
    margin-top: 40px;
	height: 40px;
	width: 110px;
	color:#fff;
	font-size:16px;
	background: rgb(255,38,126);
	cursor:pointer;
	border-radius:20px;
}


.box input[type="submit"]:hover
{
	background: #59a3f8;
	color:rgb(252, 251, 251) 
}



</style>



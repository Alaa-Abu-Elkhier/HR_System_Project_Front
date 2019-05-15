<template>
    <div>
        
        <div>
             <!--<img src="../assets/put.png" class="img">-->
        </div>
        
        <div class="Box">
            
            <form autocomplete="off">
               
                <p>Name</p>
                <input v-model="info.name" type="text" >
                <p>Department</p>
                <input v-model="info.department" type="text">
                <p>Project</p>
                <input v-model="info.project" type="text">
                <p>Salary</p>
                <input v-model="info.salary" type="text">
                <p>E_mail</p>
                <input v-model="info.e_mail" type="text">
                <p>Password</p>
                <input v-model="info.password" type="text">
                <p>Position</p>
                <input v-model="info.position" type="text">
                <div>
                    <button type="button" v-on:click="update">Update</button>  
                </div>
                <div class="home">
					<button type="button"><router-link to="/home">Home</router-link></button>
					</div>
            </form>
            
        </div>

    </div>

    
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            info: {
                
                name:'',
                department:'',
                project:'',
                salary:'',
                e_mail:'',
                password:'',
                position:''
            }
            
        }
    },
    methods: {
        update(){
           
            axios.put(`http://localhost:8000/api/employees/${this.info.name}` ,{ 
                name: this.info.name,
                department:this.info.department,
                project:this.info.project,
                salary:this.info.salary,
                e_mail:this.info.e_mail,
                password:this.info.password,
                position:this.info.position,
            })
            .then(function(response){
                console.log(response)
                alert("Employee updated Successfully");
				
            })
            .catch(function(error){
                console.log(error.response)
                alert(error.response.data);
            })
        },		
	},
}


</script>



<style>
h1{
    font-style: italic;
    
    color:#063d74
}

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
</style>
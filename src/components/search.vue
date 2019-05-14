<template>
<div>
    
    	<div>
		<img src="../assets/search.png" class="search">
		</div>
         <div class="ser">

            <form autocomplete="off">
                    <p>Empolyee Name</p>
                    <input v-model="info.name" type="text" name = "" required>
                    <button type="submit" v-on:click="search">Search</button>   
                    <div class="home">
					<button type="button"><router-link to="/home">Home</router-link></button>
					</div> 
                    
            </form>
        </div>
        <div class="data">
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{{da.name }}</td>
                </tr>
                <tr>
                    <th>Department</th>
                    <td>{{da.department }}</td>
                </tr>
                 <tr>
                    <th>Project</th>
                    <td>{{da.project }}</td>
                </tr>
                <tr>
                    <th>Salary</th>
                   <td>{{da.salary }}</td>
                </tr>
                <tr>
                    <th>E-mail</th>
                   <td>{{da.e_mail }}</td>
                </tr>
                    
                
                <tr >
                    <th>Position</th>
                    <td>{{da.position }}</td>
                    
                </tr>



    </tbody>
    </table>
        </div>
    </div>
       
    
    
    

</template>









   
</div>

    
</template>

<script>
const axios = require('axios');
export default {
    data() {
         return {
             da:[],
             
            
            info:{
            name:'',
            
            
            }
        }
    },
    methods:{
      async search(){
           name = this.info.name ;
            await axios.get(`http://localhost:8000/api/employees/${name}`)
            .then(response=>{
                       
                        
                        this.da=response.data

                        console.log(response);
                        	
						
						

					})
					.catch(function(error)
					{
                        console.log(error);
                        alert(error.response.data);
                    })

    },

    },
        }
       
        

   
    
       
               
    
    

</script>
<style>
.search
{
	width:1020px;
	height:1020px; 
	overflow:hidden;
	position:absolute;
	transform: translate(100%,-3%);
}
h1{
    font-style: italic;
    
    color:#063d74
}
.ser
{
	position:absolute;
	top:50%;
	left:50%;
	transform: translate(-155%, -145%);
	width:500px;
	height:250  px;
	padding:80px 40px;
	box-sizing: border-box;
 background:rgb(252, 251, 251) ;;
	
	
	border-radius: 10px;
	
}

.ser p
{
	padding:0;
	margin:0;
	font-weight:bold;
	color:rgb(46, 93, 131);
	font-size: 22px;
} 


.ser input
{
	width:100%;
	margin-bottom: 20px; 
}

.ser input[type="text"], .loginBox input[type="text"]
{
	border: none;
	border-bottom: 1px solid rgb(46, 93, 131);
	background: transparent;
	outline:none;
	height:45px;
	color:rgb(71, 64, 64);
	font-size: 18px;	
}

.ser button
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

}table{
    border-collapse:collapse;
    width:900px;
    text-align: center;
    font-size: 18px;
    font-style: italic;

}
th{
    color: white;
}


th,td{
    border:px solid rgb(255, 255, 255);
    padding: 15px;
    width: 90px;
  
}
.data{
    width: 800px ;
    transform: translate(5%,120%);
}



</style>



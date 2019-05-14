
<template>
<div>
    
    	<div>
		<img src="../assets/get.png" class="img">
		</div>
    <button class="but" type="button" v-on:click="get">Show Empolyees</button>
    <div class="d-tabel">
        
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Project</th>
                    <th>Salary</th>
                    <th>E-mail</th>
                    <th>Position</th>

                </tr>
                    <tr v-for="value in data ">
                        <td>{{value.name }}</td>
                        <td>{{value.department}}</td>
                        <td>{{value.project }}</td>
                        <td>{{value.salary }}</td>
                        <td>{{value.e_mail }}</td>
                        <td>{{value.position }}</td>
                        
                    </tr>



    </tbody>
    </table>
    </div>








   
</div>

    
</template>

<script>
const axios = require('axios');
export default {
    data() {
        return {
            data:[],
        }
    },
    methods:{
        get(){
            
				axios.get('http://localhost:8000/api/employees')
					.then(response=>{
                        this.data=response.data
                        
						
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
	transform: translate(110%,-12%);
}
h1{
    font-style: italic;
    
    color:#063d74
}
table{
    border-collapse:collapse;
    width:40%;
    text-align: center;
    font-size: 18px;
    font-style: italic;

}
th{
    /*background-color: aqua;*/
    color: white;
}


th,td{
    border:3px solid rgb(255, 255, 255);
    padding: 15px;
  
}
 button
{
	border:none;
	outline:none;
	height: 40px;
	width: 110px;
	color:#fff;
	font-size:16px;
	background: rgb(255,38,126);
	cursor:pointer;
	border-radius:10px;
	text-decoration: none;
}



</style>



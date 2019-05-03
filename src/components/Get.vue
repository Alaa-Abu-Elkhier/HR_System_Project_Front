<template>
<div>
    
    	<div>
		<img src="../assets/get.png" class="img">
		</div>
    <button type="button" v-on:click="get">Get</button>
    <div class="d-tabel">
        <h1>All Data of Empolyees</h1>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Department</th>

                </tr>
                    <tr v-for="value in data ">
                        <td>{{value.name| capitalize }}</td>
                        <td>{{value.Department}}</td>
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
             console.log("test")
				axios.get('http://localhost:3000/Hr-System')
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

</style>



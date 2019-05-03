<template>
<div>
    
    	<div>
		<img src="../assets/search.png" class="img">
		</div>
    
    <div class="d-tabel">
        <h1> this searh componnent</h1>
        
    </div>








   
</div>

    
</template>

<script>
const axios = require('axios');
export default {
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
	width:1035px;
	height:1035px; 
	overflow:hidden;
	position:absolute;
	transform: translate(90%,-8%);
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



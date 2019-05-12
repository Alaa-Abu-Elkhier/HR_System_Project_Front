<template>
<div>
    <h1>this LogIn  component</h1>
    <img src="../assets/login.png" class="user">
   <!-- <label class="checkbox">HR
    <input type="checkbox"  value="HR" v-model="group">
    <span class="check"></span>
</label>
<h1>{{group}}</h1>
<select id="genderid" v-model="gender">
					 
					  <option value="female">Famle</option>
					  <option value="male">Male</option>
				</select>
				<label>Gender</label>
                <h1>{{gender}}</h1>-->
    
    







   
</div>

    
</template>

<script>
const axios = require('axios');
export default {
    name:"LogIn",
    data() {
        return {
            group:"",
            gender:'',
           
        }
    },
    methods:{
        
        

    },
    
       
               
    
    
}
</script>
<style>
 
    
.user
{
	width:1000px;
	height:1000px; 
	overflow:hidden;
	position:absolute;
	transform: translate(85%, -8%);;

	
	
	
}


.checkbox {
    display: block;
    position: relative;
    padding-left: 5px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    
}


.checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}


.check {
    position: absolute;
    top: 0;
    
    height: 25px;
    width: 25px;
    background-color: #eee;
    border: 1px solid #ccc;
    transform: translate(30%,-10%);    
}


.checkbox:hover input ~ .check {
    border: 2px solid #2489C5;
}


.checkbox input:checked ~ .check {
    background-color: #2489C5;
    border:none;
}


.check:after {
    content: "";
    position: absolute;
    display: none;
}


.checkbox input:checked ~ .check:after {
    display: block;
}


.checkbox .check:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}


</style>



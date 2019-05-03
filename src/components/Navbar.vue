<template>
 
<div>
     <ul>
                    
                 <li>
                     <a href="#">
                     <div class="icon">
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <i class="fa fa-user-o" aria-hidden="true"></i>
                           <i class="fa fa-address-book" aria-hidden="true"></i>
                            <i class="fa fa-address-book" aria-hidden="true"></i>

                     </div>
                     <div class="name" >Update</div>
                     
                     </a>
                  </li>
                  
                 
                 
              
               </ul>
    </div>
            
              
              
          
</template>
<script>
export default {
    name:"Navbar",
    
}
</script>
<style>
    ul{
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-350%);
	margin: 0;
	padding: 20px 0 ;
	background: rgb(157, 204, 231);
	display: flex;
	border-radius: 10px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, .3);
	width:950px;
}
ul li {
	list-style: none;
	text-align: center;
	display: block;
	text-decoration: none;
	padding: 0 50px;
	border-right: 1px solid rgb(0, 0, 0,.2)
	

}
ul li:last-child
{
	border-right: none;

}
ul li a{ 
	text-decoration: none;
	padding: 0 50px;
	display: block;
	color: #000;
	font-weight:bold;
	

}

ul li a .icon{
	width: 40px;
	height: 40px;
	text-align: center;
	
	overflow: hidden;
	margin: 0 auto 10px;
}
ul li .icon .fa{
	width: 20%;
	height: 40%;
	line-height: 40px;
	font-size: 12px;
	transition: 0.5s;
	color: #000;



}
ul li a:hover .icon .fa:last-child{

	color: rgb(31, 124, 230);
	}
ul li a:hover .icon .fa{

transform: translateY(-100%);
}
ul li a .name 
{
	position: relative;
	height: 20px;
	width: 100%;
	display: block;
	
}
ul li a .name {
	display: block;
	position: relative;
	color: #000;
	font-size:34px;
	line-height: 20px;

}
</style>


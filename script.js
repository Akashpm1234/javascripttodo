 var  add = document.getElementById('add');
 var  removeall = document.getElementById('removeall');
 var  list  = document.getElementById('list');


   removeall.onclick = function (){
		document.getElementById('list').innerHTML = '';
	}
   
   
   
         add.onclick = function(){
	         addlis(list);
	     document.getElementById('inputtext').value = '';
	     document.getElementById('inputtext').focus();
	   
   }
		 
		 
	function 	   addlis(targetul){
			       var inputtext = document.getElementById('inputtext').value;
			        var  li = document.createElement('li');
			        var  textnode =  document.createTextNode(inputtext, '');
		            var removebutton  = document.createElement('button');
			    
			        if(inputtext != ''){
						
						 removebutton.className ='btn btn-danger btn-xs';
						  removebutton.innerHTML = '&times;';
						  removebutton.setAttribute('onclick','removeme(this)');
						 
						  
			         li.appendChild(textnode);
					li.appendChild(removebutton);
		                targetul.appendChild(li); 
				
					}
		         else{
					 alert(" Please Enter a todo")
				 }
		   }
		 
		 


   function removeme(item){
	   
	     var p = item.parentElement;
	     p.parentElement.removeChild(p);
	   
   }
		
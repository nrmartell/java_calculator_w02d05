
//Set all var to null

//when = (onclick) is pushed grab (input 1) (operator type) (input2) and assign to variables
	//confirm if input1 and  input2 are number, and alert otherwise
        /*var valu=input1;*/
        /*var valu2= input2;*///input box 2;
   


$(document).ready(function(){
 
 

    $("#equals").click(function(){
   		 var input1=parseInt($("#input1").val());
    	 var input2=parseInt($("#input2").val());
   
    	 console.log(input1);
    	 console.log(input2);
	});

 });



   
   
    
    /**
    function calc(input1, input2)
  {
    
 if(isNaN(input1) || isNaN(input2))
     {
       console.log("This calculator only crunches numbers, nom,nom,nom");
       return;
     }
   else{
   	var results= 0;
      switch(calc)
        {
          //case "+":
          	  results=input1+ input2;
               
              
          break;
          //case '-':
           results= input1 -input2;
              
          break;
 
          case '%':
          results=input1 % input2;
                
          break;
 
          case '*':
          results=input1 * input2;
                
          break;
 
          default:
                console.log("Please enter an operator");
          }
 
      }
       document.getElementById("equals").onclick= calc;
   return calc; 
   /*document.getElementById("equals").onclick = results;*/
  


 


//if variables confirmed as numbers, perform calculation
	//output calculation in answer box
	
	


//if New Equation button pushed, grab output calculation and display in bottom list and then zero out all input/output boxes(variables) ((Append li -possiblyjquery))

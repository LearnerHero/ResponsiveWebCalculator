var first_value="";
var next_value=""

var operator="";
var number="";
var display="";
function getNumber(id){
     number=document.getElementById(id).innerHTML;
     display+=number;
    document.getElementById("input").value=display;
    next_value+=number;
    //alert(number+">>>"+display+">>>"+next_value)
    //temp=document.getElementById("input").value;
}
function operation(id){
     operator=document.getElementById(id).innerHTML;
    display+=operator;
    document.getElementById("input").value=display;
   
    if(first_value==""){first_value=0}
    if(next_value==""){next_value=0}
    switch (operator) {
        case "-":
            var minus = 0;
            if (first_value == 0) {
                minus = parseFloat(next_value) - parseFloat(first_value)
            }
            else {
                minus = parseFloat(first_value) - parseFloat(next_value)
            }
            first_value = minus.toString()
            next_value = ''
            break;
        default:
            var operation = parseFloat(first_value) + parseFloat(next_value)
            first_value = operation.toString()
            next_value = ''

    }
        
}
function clear(){
    document.getElementById("input").value=0;
}

function getResult(){
    switch(operator){
        case "+":
            var sum=parseFloat(first_value)+parseFloat(next_value);
            document.getElementById("output").value=sum;
          
            break;
        case "-":
            var min=parseFloat(first_value)-parseFloat(next_value);
            document.getElementById("output").value=min;
            
            break;
        case "*":
            var mul=parseFloat(first_value)*parseFloat(next_value);
            document.getElementById("output").value=mul;
           
            break;
        case "/":
            var div=parseFloat(first_value)/parseFloat(next_value);
            document.getElementById("output").value=div;
           
            break;
        case "%":
            var per=parseFloat(first_value)/100;
            document.getElementById("output").value=per;
            
            break;
    }
    
    


   
    
}
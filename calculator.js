/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function printOutput(num){
    document.getElementById('output-value').innerText = num;
}
function printHistory(num){
    document.getElementById('history-value').innerText = num;
}
function getOutput(){
    return document.getElementById('output-value').innerText;
}
var operator = document.getElementsByClassName('operator');

for(var j = 0 ; j< operator.length ; j++){
    
    operator[j].addEventListener('click',function(){
        if(this.id =="clear"){
            var clear = "";
            printOutput(clear);
             printHistory(clear);
        }
        else if(this.id =="backspace") {
            var output = getOutput();
            if(output){
                output = output.substr(0,output.length -1 );
                printOutput(output);
                printHistory(output);
            }
        }
        
        else{
          
           if(this.id == "="){
               var result = getOutput();
                result = eval( getOutput());
                 printOutput(result);
           }else{
              var output = getOutput();
               output = output + this.id;
               printOutput(output);
                printHistory(output);
               
               
           }

         
            
        }
    });
}
        
        
        
var num = document.getElementsByClassName('number');
for (var i = 0; i< num.length ; i++){
    
    num[i].addEventListener('click',function(){
        
        var output = getOutput();
        if(output != NaN){
            output = output + this.id;
            printOutput(output);
            printHistory(output);
        }
    });
}

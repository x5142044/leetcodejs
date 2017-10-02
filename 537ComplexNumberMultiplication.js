/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
   var aD = dividedInput(a);
    var bD =dividedInput(b);
   return aD[0]*bD[0]-aD[1]*bD[1]+ "+"+(aD[1]*bD[0]+aD[0]*bD[1])+"i"  ;
  
};


function dividedInput(x){
    var num = x.split("+");
    var num2 = num[1].slice(0,num[1].length-1); 
    var num3 = "i";
    var divided = [];
     divided[0] =num[0], divided[1]=num2, divided[2]=num3;   
    return divided;
    
}
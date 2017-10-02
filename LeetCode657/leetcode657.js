/**
 * @param {string} moves
 * @return {boolean}
 */

var judgeCircle = function(moves) {
         var xc=0,yc=0;    //position change on x-axis and y-axis
     var arr = moves.split("");
    for (var i=0; i<arr.length; i++){
        switch(arr[i]){
           case arr[i]="R":
                 xc++;
                break;
           case arr[i]="L":
                 xc--;
                break;
           case arr[i]="U":
                 yc++;
                break;
           case arr[i]="D":
                 yc--;
                break;
           }
    }
       if (xc===0 && yc===0)
        return true;
    else 
        return false;
};
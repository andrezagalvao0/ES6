function fn(){
    log('Hoisting de funcção');

    function log(value){
        console.log(value);
    }
}

fn();

 

/** como funciona normalmente
 * function fn(){
 *  function log(value){
 *      console.log(value);
 *  }
 *  
 *  log('Hoisting de função');
 * }
 * 
 */
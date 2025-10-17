/**
 * 
 * 
 * @returns {void}
 */

const szam = 6;

function valami1(){
    console.log("aaa")
}

function valami2(){
    console.log(szam)
}

valami1();
valami2();

function valami3(){
    const p = 9;
    console.log(p)    
}

valami3()

/**
 * 
 * @param {number} param1
 * @returns {number} 
 */

function valami4(param1 ){
    const b = 6;
    const c = b + param1;
    return c;
}

const opsum = valami4(4);
console.log(opsum);


function rev(str){
    if(!str || typeof str != 'string' || str.length<2){
        return str
    }
    const back=[]
    for(let i=0;i< str.length;i++){
        back[i]=str[str.length-1-i]
    }
    return back.join('')
    
}

function reverse2(str){
    //check for valid input
    return str.split('').reverse().join('');
  }
  
console.log(rev('hi my name is anu'))
function firstNonRepeating(str){
    let obj={}
    for(let element of str){
      obj[element]=(obj[element] || 0)+1;
      
    }
    
    for(let i=0;i<str.length;i++){
      if(obj[str[i]]===1){
        return i
      }
    }
    return -1
    
  }
  const input="lovelov";
  console.log(firstNonRepeating(input));
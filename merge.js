function mergeSortedArrays(a1,a2){
    var total= a1.length +a2.length
    var sort=[]
    var o=0
    var b=0
    while(total>0){
      if(a1[o]<=a2[b] || b==a2.length){
        sort.push(a1[o])
        o++
        total--
      }
      else if(a2[b]<=a1[o] || o==a1.length){
        sort.push(a2[b])
        b++
        total--
      }
    }
    console.log(sort)
  
  }
    
  
  mergeSortedArrays([0,3,4,31], [3,4,6,30]);
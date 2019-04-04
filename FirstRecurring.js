//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    var find=[]
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if(input[i] === input[j]) {
          find.push([i,j])
  
        }
      }
     
    }
    console.log(find)
     var sum='none'
      var f=0
      for(i=0;i<find.length;i++){
        if(sum==='none'){
          sum = find[i][0]-find[i][1]
         f=input[i]
         console.log(sum)
        }
        else{
          if(find[i][0]-find[i][1]>sum){
            sum=find[i][0]-find[i][1]
            f=input[i]
          }
        }
      }
    return f
  }
  
  function firstRecurringCharacter2(input) {
    let map = {};
    for (let i = 0; i < input.length; i++) {
      if (map[input[i]] !== undefined) {
        return input[i]
      } else {
        map[input[i]] = i;
      }
    }
    return undefined
  }
  
  firstRecurringCharacter([2,5,5,2,3,5,1,2,4])
  
  
  //Bonus... What if we had this:
  // [2,5,5,2,3,5,1,2,4]
  // return 5 because the pairs are before 2,2
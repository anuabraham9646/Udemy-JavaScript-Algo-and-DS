function foeach(box,box2){
  box.forEach(function(elt){
    console.log(elt);
  });
  box2.forEach(function(elt){
    console.log(elt);
  });
}

function pair(array){
  for(let i=0;i<array.length;i++)
  {
    for(let j=0;j<array.length;j++)
    {
      if(i==j){
        continue;
      }
      else{
        console.log(array[i]+','+array[j]);
      }
    }
  }
}

var a=[1,'anu',55];
var n=[2,'asas',4545];
foeach(a,n);

var array=[1,2,3,4,5,6];
pair(array);
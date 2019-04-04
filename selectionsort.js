const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
   for(let i=0;i<array.length;i++){
      small=array[i]

      for(let j=i+1;j<array.length;j++){

        if(array[j]<small){
          small= array[j]
          pos=j

        }

      }
    if(pos != i){

      temp= array[pos]
      array[pos]=array[i]
      array[i]=temp
      
    }

  }

  
}

selectionSort(numbers);
console.log(numbers)
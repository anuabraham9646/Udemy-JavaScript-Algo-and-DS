const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for(let i=0;i<array.length;i++){
    j=i
    while(j>=0){
      if(array[j]<array[j-1]){
        temp=array[j]
        array[j]=array[j-1]
        array[j-1]=temp
        //break
      }
      else{
        j--
      }
      
    }
  
}
}
insertionSort(numbers);
console.log(numbers);
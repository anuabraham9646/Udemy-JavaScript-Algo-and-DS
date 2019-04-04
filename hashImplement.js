class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      //console.log('hash='+hash)
      return hash;
  
    }
    set(key,value){
      let index = this._hash(key)
      if(!this.data[index]){
        
        this.data[index]=[]
  
      }
      this.data[index].push([key,value])
      console.log(this.data)
      return this.data
    }
    get(key){
      let index = this._hash(key)
      let bucket=this.data[index]
      if(bucket){
  
      for(let i=0;i<bucket.length;i++){
        if(bucket[i][0]==key)
        {
          var found=bucket[i][1]
          
        }
      }
      return found  
        
    }
    return 'not found'
    
  }
  }
  myHashTable1 = new HashTable(2);
  
  myHashTable1.set('grapes', 10000)
  console.log(myHashTable1.get('grapes'))
  myHashTable1.set('apples', 9)
  console.log(myHashTable1.get('apples'))
  
class MyLinked{
    constructor(value){
      this.head= {
        'value': value,
        next: null,
        prev:null
      }
      this.tail= this.head
      this.length=1
    }
    append(value){
     let newNode={
       value: value,
       next: null,
       prev: this.tail
     }
     this.tail.next=newNode
     this.tail=newNode
     this.length++
    }
    prepend(value){
      let newNode={
        value : value,
        next : null,
        prev: null
      }
      newNode.next=this.head
      this.head.prev=newNode
      this.head=newNode
      this.length++
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
      }
      console.log('current array=',array)     
    }
    insert(index,value){
      if(index>=this.length){
        this.append(value)
        return
      }
      if(index <=1){
        this.prepend(value)
        return
      }
      let newNode={
        value: value,
        next:null
      }
      let node= this.head
      for(let i=0;i<index-2;i++){
        node= node.next  
      }
      let nextnode= node.next
      newNode.next= node.next
      newNode.prev=node
      nextnode.prev=newNode
      node.next= newNode
      this.length++
    }
    remove(index){
      let currentNode = this.head; 
      if(index<=1){
        currentNode=currentNode.next
        this.head=currentNode
        currentNode.prev=null
        this.length--
        return
      }
      else{
        if(index>=this.length){
          index= this.length
        }  
        for(let i=0;i<index-2;i++){
          currentNode = currentNode.next
      }
  
      if(index>=this.length){
        currentNode.next=null
        this.length--
        this.tail=currentNode
        return
      }
        let nextnode= currentNode.next
        nextnode.next.prev=currentNode
        currentNode.next= nextnode.next
        this.length--
      }
      
    }
    reverse(){
      let revArray=[]
      let currentNode= this.tail
      while(currentNode!=null){
        revArray.push(currentNode.value)
        currentNode= currentNode.prev
      }
      console.log('reverse array=',revArray)
    }
  }
  let my= new MyLinked(10)
  my.append(55)
  my.prepend(1)
  my.append(66)
  my.append(990)
  my.prepend(0)
  my.insert(99,22)
  my.insert(2,212)
  my.printList()
  //my.remove(8)
  my.printList()
  my.reverse()
  console.log(my)
  
  
  
  //  1    12         13       15        18
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first
    }
    print(){
      let myarr=[]
      let nextnode= this.first
      while(nextnode != null){
        myarr.push(nextnode.value)
        nextnode=nextnode.next
      }
      console.log(myarr)
    }
    enqueue(value){
      const node= new Node(value)
      if(this.length<1){
        this.first=this.last=node
      }
      else{
        this.last.next=node
        this.last=node
      }
      this.length ++
      this.print()
      return this
    }
    dequeue(){
      if(this.length==0){
        return
      }
      else if(this.length==1){
        this.first=this.last=null
      }
      else if(this.length==2){
        this.last=this.first
        this.first.next=null
      }
      else{
        let first=this.first.next
        this.first=first
  
      }
      this.length--
      this.print()
      return this
    }
    //isEmpty;
  }
  
  const my = new Queue();
  my.enqueue(1)
  my.enqueue(2)
  my.enqueue(5)
  
  my.dequeue()
  
  //Joy
  //Matt
  //Pavel
  //Samir
  
  
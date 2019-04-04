class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top
    }
    push(value){
      const node= new Node(value)
      if(this.isEmpty()){
        node.next=null
  
        this.top= this.bottom= node
      }
      else{   
        const holding= this.top
        this.top= node
        this.top.next=holding
  
      }
      this.length ++
      this.print()
      return this
  
    }
    pop(){
      if(this.isEmpty()){
        return
      }
      else if(this.length==1){
        this.top=null
        this.bottom=null
      }
      else if(this.length==2){
        this.top= this.bottom
      }
      else{
        this.top=this.top.next
      }
      this.length--
      this.print()
      return this
    }
    print(){
      const myarr=[]
      let node=this.top
      while(node != null){
        myarr.push(node.value)
        node=node.next
      }
      console.log(myarr)
    }
    isEmpty(){
      if(this.length<1){
        return true
      }
      else{
        return false
      }
    }
  }
  
  const my = new Stack();
  
  my.isEmpty()
  my.push(55)
  my.push(66)
  my.pop()
  my.pop()
  my.push(5)
  my.push(6)
  my.push(7)
  my.pop()
  my.peek()
  
  
  
  //Discord
  //Udemy
  //google
  
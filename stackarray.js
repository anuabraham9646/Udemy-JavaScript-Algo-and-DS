
class Stack {
    constructor(){
      this.data=[]
  
    }
    peek() {
      return this.data[this.data.length-1];
    }
    push(value){
      this.data.push(value)
      return this
    }
    pop(){
      this.data.pop()
      return this
    }
    //isEmpty
  }
  
  const myStack = new Stack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.pop()
  //myStack.peek();
  
  
  
  //Discord
  //Udemy
  //google
  
class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }
  enque(value){
    if(this.first.length==0){
      this.first.push(value)
      return
    }
    else{
      while(this.first.length>0){
      this.last.push(this.first.pop())
    }
    //  console.log(this.last,this.first)
    this.first.push(value)
     // console.log(this.last,this.first)
    while(this.last.length>0){
      this.first.push(this.last.pop())
    }
    //console.log(this.last,this.first)
    }
  }

  deque(){
    let pop=this.first.pop()
    console.log('popped item from queue is=',pop)
    }

  print(){
    
      console.log(this.first)

  }

}
let cr= new CrazyQueue()
cr.enque(5)
cr.enque(6)
cr.enque(7)
cr.print()

cr.enque(8)
cr.deque()
cr.print()


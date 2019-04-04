class myArray{
    constructor(){
        this.length=0;
        this.data={}

    }
    push(item){
        this.data[this.length]=item
        this.length++;
        return this.length
    }
    get(index){
        return this.data[index-1];
    }
    pop(){
        delete this.data[this.length-1]
        this.length--;
        return this.length;
    }
    insert(index,value){
        this.shift(index)
        this.data[index-1]=value
        this.length++
        return this.data
    }
    shift(index){
        for(let i= this.length;i>=index;i--){
            this.data[i]=this.data[i-1]
        }
    }
    delete(index){
        var del=this.data[index-1]
        this.shift2(index)
        delete this.data[this.length-1]
        this.length--
        return (this)

    }
    shift2(index){
        for(let i= index-1;i<this.length;i++){
            this.data[i]=this.data[i+1]
        }
    }
}
//[0 1 2 3 4 5 6]

const arr = new myArray();
arr.push(10)
arr.push('hello');
console.log(arr);
console.log(arr.get(2));
console.log(arr.insert(1,555))

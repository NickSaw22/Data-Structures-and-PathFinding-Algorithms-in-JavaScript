class Stack{
    constructor(){
        this.items=[]
        this.count=0
    }
    //Add element to top of stack
    push(element){
        this.items[this.count]=element
        console.log(`${element} added to ${this.count}`)
        this.count+=1
        return this.count
    }

    //Return and remove top element in stack
    //Return undefined if stack is empty
    pop(){
        if(this.count == 0 ){
            return undefined
        }
        let deleteItem = this.items[this.count-1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    //Check top element in stack
    peek(){
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    //Check if stack is empty
    isEmpty(){
        console.log(this.count==0? `Stack is empty`: `Stack is not empty`)
        return this.count==0
    }

    //Print elements in stack
    print(){
        let str = ''
        for(let i  = 0; i < this.count; i++){
            str += this.items[i] + ' '
        }
        return str
    }

    //Clear stack
    clear(){
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items

    }

    size(){
        console.log(this.count==0? `Stack is empty`:`Size of stack: ${this.count}`)
        return this.count
    }



}


//TESTING
const stack = new Stack()

stack.isEmpty()

stack.push(100)
stack.push(200)
stack.push(300)

console.log(stack.print())
console.log(stack.size())

stack.peek()

stack.pop()
stack.pop()

stack.clear()

console.log(stack.print())

stack.peek()

stack.isEmpty()
console.log(stack.size())
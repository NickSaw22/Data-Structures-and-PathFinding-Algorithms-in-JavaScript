class Queue{
    constructor(){
        this.count=0
        this.lowestcount=0
        this.items=[]
    }
    //Add elements to queue
    enqueue(element){
        this.items[this.count]=element
        console.log(`${element} added at ${this.count}`)
        this.count+=1
        return this.count
    }

    //FIFO
    //Remove from start
    dequeue(){
        if(this.isEmpty()){
            return undefined
        }
        let result = this.items[this.lowestcount]
        delete this.items[this.lowestcount]
        this.lowestcount++
        console.log(`${result} removed`)
        return result
    }

    //print element at start of queue
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        console.log(`Peeked: ${this.items[this.lowestcount]}`)
        //return this.items[this.lowestcount]
    }

    //Print size of queue
    size(){
        console.log(`Size of queue: ${this.count - this.lowestcount}`)
        //return this.count - this.lowestcount
    }

    //Return false if size is 0
    isEmpty(){
        return this.size() === 0
    }

    clear(){
        this.items = []
        this.count = 0
        this.lowestcount = 0
    }

    print(){
        if(this.isEmpty()){
            return undefined
        }
        let result = `${this.items[this.lowestcount]}`
        for(let i = this.lowestcount+1; i < this.count; i++){
            result = `${result}, ${this.items[i]}`
        }
        return result
    }
}

//TESTING
const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
console.log(queue.print())

console.log(queue.size())
console.log(queue.isEmpty())

queue.dequeue()
queue.dequeue()
console.log(queue.print())
queue.dequeue()
console.log(queue.print())

console.log('To check clear : ')
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
console.log(queue.print())
console.log(queue.size())
queue.clear()
console.log(queue.size())

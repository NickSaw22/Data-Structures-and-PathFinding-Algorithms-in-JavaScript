class Deque{
    constructor(){
        this.items = []
        this.lowercount = 0
        this.count = 0
    }

    addFront(element) {
        
        
        if (this.isEmpty()) {
        this.addBack(element);
        } 
        
        else if (this.lowestCount > 0) { 
        this.lowestCount--;
        this.items[this.lowestCount] = element;
        } 
        
        else {
        for (let i = this.count; i > 0; i--) { 
        this.items[i] = this.items[i - 1];
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element; 
        }
    }

    addBack(element){
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
    
    //Print size of queue
    size(){
        console.log(`Size of queue: ${this.count - this.lowestcount}`)
        //return this.count - this.lowestcount
    }

    //Return false if size is 0
    isEmpty(){
        console.log(this.size() === 0 ? `Queue is Empty` : `Queue is not Empty`)
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
const deque = new Deque()
console.log(deque.isEmpty())
/*
deque.addFront(100)
deque.addFront(200)
deque.addFront(300)
console.log(deque.print())

console.log(deque.size())
console.log(deque.isEmpty())

deque.dequeue()
deque.dequeue()
console.log(deque.print())
deque.dequeue()
console.log(deque.print())

console.log('To check clear : ')
deque.addBack(100)
deque.addBack(200)
deque.addBack(300)
console.log(deque.print())
console.log(deque.size())
deque.clear()
console.log(deque.size())
*/
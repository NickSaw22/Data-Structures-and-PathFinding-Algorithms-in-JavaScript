//create new node
class Node{ 
    constructor(element){
        this.element = element
        this.next = undefined
    }
}

class LinkedList{ 
    //initialize linked list
    constructor(){
        this.count = 0
        this.head = undefined
        
    }

    //Add element in the linked-list
    push(element){
        const node = new Node(element)      //create node
        let current                         //set current 
        if(this.head == null){              //check if empty
            this.head = node                //add at start
        }
        else{
            current = this.head             //set current to start ans begin traversing with the help of loop
            while(current.next != null){    //get at the end of linked list
                current = current.next      //go incrementing
            }
            current.next = node             //set current to node 
        }
        this.count++                        //increment the count of nodes i.e. size of linked list
    }


    //remove element from linked list
    removeAt(index){
        if(index >= 0 && index < this.count){
            let current = this.head
            if(index === 0){
                this.head = current.next
            }
            else{
                let previous;
                for(let i = 0; i < index; i++){
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            this.count--
            console.log(`${current.element} is removed`)
            return current.element
        }
        else{
            console.log(`Out of range`)
            return undefined
        }
    }

    //Get element at given position
    getElementAt(index){
        if(index >= 0 && index <= this.count){
            let current = this.head
            for(let i = 0; i< index & current != null; i++){
                current = current.next
            }
            console.log(`${current.element} at ${index}`)
            return current
        }
        console.log(`Not in Range`)
        return undefined
    }

    //Insert element at any position
    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element)
            if(index === 0){
                const current = this.head
                node.next = current
                this.head = node
            }
            else{
                const previous = this.getElementAt(index-1)
                const current = previous.next
                node.next = current
                previous.next = node
            }
            this.count++
            console.log(`${element} inserted`)
        }
        return false
    }


    //return index of element
    indexOf(element){
        let current = this.head
        let c = 0
        while(current != null){
            if(current.element === element){
                console.log(`${element} is at index ${c}`)
                return c
            }
            c++
            current = current.next
        }
        console.log(`${element} not present`)
        return -1
    }
    //return size of linked list
    size() {
        return this.count;
    }

    isEmpty(){
        return this.size() === 0
    }

    getHead(){
        return this.head
    }

    print() {
        if (this.head == null) { 
        return ''
        }
        let result = `${this.head.element}`
        let current = this.head.next
        for (let i = 1; i < this.size() && current != null; i++) {
            result = `${result},${current.element}`
            current = current.next
        }
            return result
    }
}


//TESTING

const list = new LinkedList()
list.push(100)
list.push(200)
console.log(list.print())
list.insert(300, 1)
//list.getElementAt(1)
list.indexOf(200)
console.log(list.print())
list.removeAt(1)
list.removeAt(10)

console.log(list.print())

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
}

class DoublyNode extends Node{
    constructor(element, next, prev){
        super(element, next)
        this.prev = prev
    }
}

class DoublyLinkedList extends LinkedList{
    constructor(){
        super()
        this.tail = undefined
    }

    //return size of linked list
    size() {
        return this.count;
    }

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
    
    //insert new node
    insert(element, index){
        if(index >=0 && index <= this.count){
            const node = new DoublyNode(element)
            let current = this.head
            if(index === 0){
                if(this.head == null){
                    this.head = node
                    this.tail = node
                }
                else{
                    node.next = this.head
                    current.prev = node
                    this.head = node 
                }
            }
            else if(index === this.count){
                let current = this.tail
                current.next = node
                node.prev = current
                this.tail = node
            }
            else{
                const previous = this.getElementAt(index-1)
                current = previous.next
                node.next = current
                previous.next = node 
                current.prev = node 
                node.prev = previous   
            }
            this.count++
            return true 
        }
        return false
    }

    //remove at given index
    removeAt(index){
        if(index >=0 && index < this.count){
            let current = this.head
            if(index === 0){
                this.head = current.next
                if(this.count === 1){
                    this.tail = undefined
                }
                else{
                    this.head.prev = undefined
                }
            }
            else if(index === this.count - 1){
                current = this.tail
                this.tail = current.prev
                this.tail.next = undefined
            }
            else{
                current = this.getElementAt(index)
                const previous = current.prev
                previous.next = current.next
                current.next.prev = previous
            }
            this.count--
            return current.element
        }
        return undefined
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
console.log('DOUBLY LINKED LIST')
const list = new DoublyLinkedList()
list.insert(100, 0)
list.insert(200, 1)
console.log(list.print())
list.insert(300, 2)
//list.getElementAt(1)
console.log(list.print())
list.removeAt(1)
list.removeAt(10)

console.log(list.print())

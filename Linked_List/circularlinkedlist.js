class Node{
    constructor(element){
        this.element = element
        this.next = undefined
    }
}
class CircularLinkedList{
    constructor(){
        this.head = undefined
        this.count = 0
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


    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            let current = this.head
            if (index === 0) {
                if (this.head == null) {
                    this.head = node
                    node.next = this.head
                } 
                else {
                    node.next = current
                    current = this.getElementAt(this.size())
                    // update last element
                    this.head = node
                    current.next = this.head
                }
            }
            else { 
                // no changes in this scenario
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    
    //remove node
    removeAt(index){
        if(index >= 0 && index <= this.count){
            let current = this.head
            if(index === 0){
                if(this.size() === 1){
                    this.head = undefined
                }
                else{
                    const removed = this.head
                    current = this.getElementAt(this.size())
                    this.head = this.head.next
                    current.next = this.head
                    current = removed
                }
            }
            else{
                const previous = this.getElementAt(index-1)
                current = previous.next
                previous.next = current.next
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
console.log('CIRCULAR LINKED LIST')
const list = new CircularLinkedList()
list.insert(100, 0)
list.insert(200, 1)
console.log(list.print())
list.insert(300, 2)
//list.getElementAt(1)
console.log(list.print())
list.removeAt(1)
list.removeAt(10)

console.log(list.print())
list.getElementAt(3)

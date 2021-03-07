class Node{
    constructor(data){
        this.data = data
        this.left = undefined
        this.right = undefined
    }
}

class BinarySearchTree{
    constructor(){
        this.root = undefined
    }

    //insert new node to tree if root is empty
    insert(data){
        //initialize node
        var newNode = new Node(data)
        if(this.root === undefined){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    //
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === undefined){
                node.left = newNode
            }
            else{
                this.insertNode(node.left, newNode)
            }
        }
        else{
            if(node.right === undefined){
                node.right = newNode
            }
            else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    //remove data
    remove(data){
        this.root = this.removeNode(this.root, data)
    }

    //remove node
    removeNode(node, key){
        if(node === undefined){
            return undefined
        }
        else if(key < node.data){
            node.left = this.removeNode(node.left, key)
            return node
        }
        else if(key > node.data){
            node.right = this.removeNode(node.right, key)
            return node
        }
        else{
            if(node.left === undefined && node.right === undefined){
                node = undefined
                return node
            }
            if(node.left === undefined){
                node = node.right
                return node
            }
            else if(node.right === undefined){
                node = node.left
                return node
            }
            var aux =  this.findMinNode(node.right)
            node.data=  aux.data

            node.right = this.removeNode(node.right, aux.data)
            return node
        }
    }
    //Traverse tree
    
    //inorder left-root-right
    inorder(node){
        if(node != undefined){
            this.inorder(node.left)
            console.log(node.data)
            this.inorder(node.right)
        }
    }

    //preorder root-left-right
    preorder(node){
        if(node != undefined){
            console.log(node.data)
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    //postorder left-right-root
    postorder(node){
        if(node != undefined){
            this.postorder(node.left)
            this.postorder(node.right)
            console.log(node.data)
        }
    }

    findMinNode(node){
        if(node.left === undefined){
            return node
        }
        else{
            return this.findMinNode(node.left)
        }
    }

    getRootNode(){
        return this.root
    }

    search(node, data){
        if(node === undefined){
            return undefined
        }
        else if(data < node.data){
            return this.search(node.left, data)
        }
        else if(data > node.data){
            return this.search(node.right, data)
        }
        else{
            return node
        }
    }
}

// create an object for the BinarySearchTree 
var BST = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 


var root = BST.getRootNode(); 
              
// prints 5 7 9 10 13 15 17 22 25 27 
BST.inorder(root); 
              
// Removing node with no children  
BST.remove(5); 

var root = BST.getRootNode(); 
              
// prints 7 9 10 13 15 17 22 25 27 
BST.inorder(root); 
              
// Removing node with one child  
BST.remove(7); 

var root = BST.getRootNode(); 
  
// prints 9 10 13 15 17 22 25 27 
BST.inorder(root); 
              
// Removing node with two children  
BST.remove(15); 

var root = BST.getRootNode(); 
console.log("inorder traversal"); 
  
// prints 9 10 13 17 22 25 27 
BST.inorder(root); 
              
console.log("postorder traversal"); 
BST.postorder(root); 
console.log("preorder traversal"); 
BST.preorder(root); 
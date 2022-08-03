class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Inserts a new node at the front of the list
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Inserts a new node at the end of the list
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make a head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Inserts a new node at the given index
    insertAtIndex(index, data) {
        // If index is out of range
        if(index > 0 && index > this.size) return

        // If index is 0 set it to head
        if(index === 0) 
            return this.insertFirst(data);

        const node = new Node(data);
        let current, prev;

        current = this.head;
        let count = 0;

        while(count < index) {
            prev = current;
            current = current.next;
            count++;
        }

        prev.next = node;
        node.next = current;
        this.size++;
    }

    // Removes the node at the front of the list

    // Removes the node at the end of the list

    // Removes the node at the given index

    // Returns the node at the front of the list

    // Returns the node at the end of the list

    // Returns the node at the given index
    getAtIndex(index) {
        // If index is out of range
        if(index > 0 && index >= this.size) return

        let current = this.head;
        let count = 0;
        while(count < index) {
            current = current.next;
            count++;
        }

        console.log(current.val)

        return current.next;
    }

    // Returns the length of the list

    // Clears the list

    // Prints the list
    printList() {
        let current = this.head;
        let print = '';
        while(current) {
            print += `${current.val}${current.next ? ' => ' : '' }`;
            current = current.next;
        }
        console.log(print);

        return print;
    }
}


module.exports = LinkedList;
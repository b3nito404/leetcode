// #2-Add two numbers [Medium]

/**
 * Problem:
   Two non-empty linked lists represent two non-negative integers stored in
   reverse order. Add the numbers and return the sum as a linked list.
   Example: (2 -> 4 -> 3) + (5 -> 6 -> 4) = 7 -> 0 ->8  (i.e. 342 + 465 = 807)

   Approach: Digit-by-digit addition with carry
   Walk both lists simultaneously. At each step: add the two digits + the
   carry from the previous step. Record the unit digit and propagate the
   carry (0 or 1) to the next iteration.

 time:  O(max(m, n)) we visit every node of both lists once
 space: O(max(m, n)) the result list has at most max(m,n)+1 nodes 
 */

class Listnode {
    val : number;
    next: Listnode | null;
    constructor(val = 0, next: Listnode | null = null) {
        this.val = val;
        this.next = null;
    }
}

function addTwoNumbers(
    l1: Listnode | null,
    l2: Listnode | null,
): Listnode | null {
 
    const fakeNode = new Listnode(0);
    let current = fakeNode;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !== 0) {
        const a = l1?.val?? 0;
        const b = l2?.val?? 0;

        const sum = a + b + carry;
        carry = Math.floor(sum/10);
        const digit = sum % 10;

        current.next = new Listnode(digit);
        current = current.next;

        l1 = l1?.next?? null;
        l2 = l2?.next?? null;

    }

    return fakeNode.next;
    
}
#include<stdio.h>

struct Node {
    int data;
    struct Node *next;
};

void traverseByRecursion(struct Node *);
int main() {
    struct Node head;
    struct Node node1;
    struct Node node2;
    struct Node node3;

   
    head.data = 10, head.next = &node1;
    node1.data = 20, node1.next = &node2;
    node2.data = 30, node2.next = &node3;
    node3.data = 40, node3.next = NULL;

    struct Node *node = &head;

    // traverse linked list
   /*  while(node != NULL) {
    printf("%d ", node->data);
    // move to next node
    node = node->next;
    } */
   traverseByRecursion(&head);


    return 0;
}

void traverseByRecursion(struct Node *head) {
    // when the head is NULL exit to prevent seg fault
    if(head == NULL) {
        return;
    }
    //always print hte data event if it has no next
    printf("%d ", head->data);
    // if it has a next repeat
    if(head != NULL) {
        traverseByRecursion(head->next);
       
    }
 

}
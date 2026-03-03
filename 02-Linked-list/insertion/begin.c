#include<stdio.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node *insertATStart(Node *head, int data) {
    static Node newNode;

    newNode.data = data;
    newNode.next = head;
    // new head
    return &newNode;
}

void printList(Node *head) {
    Node *curr = head;

    while(curr != NULL) {
        printf("%d", curr->data);

        if(curr->next != NULL) printf("->");

        // move to next node
        curr = curr->next;
    }

    printf("\n");
}

int main() {
    Node head = {10, NULL};
    Node node1 = {20, NULL};
    Node node2 = {30, NULL};
    Node node3 = {40, NULL};

    // set pointers
    head.next = &node1;
    node1.next = &node2;
    node2.next = &node3;

    //list before insert
    printList(&head);

    // insert at start
    Node *ptr = insertATStart(&head, 100);

    // list after insert
    printList(ptr);


    return 0;
}
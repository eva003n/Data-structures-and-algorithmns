#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct
{
    // keep track of element at front position
    int front;
    // keep track of rear insertion point
    int size;
    // maximum queue capacity
    int capacity;

    // flexible array to represent queue
    int arr[];
} Queue;

// queue methods prototypes
bool isFull(Queue *);
bool isEmpty(Queue *);
int enqueue(Queue *, bool (*ptrIsFull)(Queue *), int);
int dequeue(Queue *, bool (*ptrIsEmpty)(Queue *));
int getFront(Queue *);
int getRear(Queue *);

int main()
{

    int capacity = 7;
    // manually allocate memory for structure
    int totalMemory = sizeof(Queue) + capacity * sizeof(int);

    Queue *q1 = malloc(totalMemory);

    // when memory is not allocated allocated exit with error
    if (q1 == NULL)
    {
        printf("Queue memory allocation failed");
        return -1;
    }

    printf("Total memory allocated: %zu bytes\n", totalMemory);
    // initialize
    q1->front = 0;
    q1->size = 0;
    q1->capacity = capacity;

    // add to queue
    // bool (*ptrIsFull)(Queue *) = isFull; // pass reference
    enqueue(q1, isFull, 10);
    enqueue(q1, isFull, 20);
    enqueue(q1, isFull, 30);
    enqueue(q1, isFull, 40);
    enqueue(q1, isFull, 50);

    printf("Front: %d\n", getFront(q1));
    printf("Rear: %d\n", getRear(q1));

    printf("Dequeued: %d\n", dequeue(q1, isEmpty));
    printf("Enqueued: %d\n", enqueue(q1, isFull, 60));
    printf("Enqueued: %d\n", enqueue(q1, isFull, 70));
    printf("Enqueued: %d\n", enqueue(q1, isFull, 80));

    // queue is full
    printf("Size: %d\n", q1->size);
    printf("Enqueued: %d\n", enqueue(q1, isFull, 90));

    printf("Front: %d\n", getFront(q1));
    printf("Rear: %d\n", getRear(q1));

    // only free memory when its allocated
    free(q1);

    return 0;
}

// queue function definition
bool isFull(Queue *q)
{
    // when size reaches max capacity
    return q->size == q->capacity;
};
bool isEmpty(Queue *q)
{
    // when queue is empty
    return q->size == 0;
};
int enqueue(Queue *q, bool (*ptrIsFull)(Queue *), int element)
{
    // failed to add
    if ((*ptrIsFull)(q))
    {
        printf("Queue is full\n");
        return -1;
    }
    // add element at rear(front + size)
    int rear = (q->front + q->size++) % q->capacity; // update the size also
    q->arr[rear] = element;
    return element;
};

int dequeue(Queue *q, bool (*ptrIsEmpty)(Queue *))
{
    if ((*ptrIsEmpty)(q))
    {
        printf("Queue is empty\n");
        return -1;
    }
    // remove by incrementing front(simulate deletion)
    int deletedElement = q->arr[q->front];

    // update size and front
    q->front = (q->front = 1) % q->capacity; // problem queue gets full early since are not actually deleting items
    q->size--;//update size since we are overwriting

    return deletedElement;
};
int getFront(Queue *q)
{
    return q->arr[q->front];
};
int getRear(Queue *q)
{
    // array zero based so -1
    int rear = (q->front + q->size - 1) % q->capacity;

    return q->arr[rear];
};
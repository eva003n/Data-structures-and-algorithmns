#include <stdio.h>

int main()
{
    int n = 5; // valid elements
    int arr[] = {1, 2, 3, 4, 5, 0};
    int length = sizeof(arr) / sizeof(int);
    int i, position = 2;
    int element = 10; // element to insert
    

    // reverse traverse
    for (i = n; i >= position; i--)
    {
        // shift each element to the right until specific position
        arr[i] = arr[i - 1];

    }
    // insert at position
    arr[position - 1] = element;

    // print the new array
    for (i = 0; i < length; i++)
    {
        printf("arr[%d] = %d\n", i, arr[i]);
    }

    return 0;
}
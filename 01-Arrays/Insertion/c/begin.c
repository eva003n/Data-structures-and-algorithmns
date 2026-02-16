#include <stdio.h>

int main()
{
    int n = 5;
    // leave an extra space for new element to be added
    int arr[] = {1, 2, 3, 4, 5, 0};
    int length = sizeof(arr) / sizeof(int);
    int i;
    int element = 10; // element to insert

    // reverse traverse
    for (i = n; i >= 0; i--)
    {
        // shift each element to the right
        arr[i] = arr[i - 1];
     

    }

    // insert at start
    arr[0] = element;

    // print the new array
    for (i = 0; i < length; i++)
    {
        printf("%d, ", arr[i]);
    }

    return 0;
}
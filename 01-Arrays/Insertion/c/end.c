#include <stdio.h>

int main()
{
    int n = 5;
    // leave an extra space for new element to be added
    int arr[] = {1, 2, 3, 4, 5, 0};
    int length = sizeof(arr) / sizeof(int);
    int i;
    int element = 10; // element to insert

    // insert at end
    arr[n] = element;

    // print the new array
    for (i = 0; i < length; i++)
    {
        printf("%d, ", arr[i]);
    }

    return 0;
}
#include <stdio.h>

int main()
{
    int arr[6] = {1, 2, 3, 4, 5};
    int length = sizeof(arr) / sizeof(int);
    int i;
    int element = 10; // element to insert

    // reverse traverse
    for (i = length - 1; i >= 0; i--)
    {
        // shift each element to the right
        arr[ i + 1] = arr[i];
        // insert at start
        if(i == 0) {
            arr[i] = element;
        }

    }

    // print the array
    for (i = 0; i < length; i++)
    {
        printf("%d, ", arr[i]);
    }

    return 0;
}
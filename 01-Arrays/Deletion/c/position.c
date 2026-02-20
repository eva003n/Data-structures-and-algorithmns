#include <stdio.h>

int main()
{
    int arr[] = {1, 2, 3, 4};
    int i, n = sizeof(arr) / sizeof(arr[0]);
    int position = 4;


    for (int i = position; i < n; i++)
    {
        arr[i - 1] = arr[i];
    }

    // handle cases where the position is the last element
    if(position <= n) n--;

    // print new array
    for (i = 0; i < n; i++)
    {
        printf("%d, ", arr[i]);
    }

    return 0;
}
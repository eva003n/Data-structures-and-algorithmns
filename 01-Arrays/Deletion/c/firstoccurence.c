#include <stdio.h>
#include <stdbool.h>

int main()
{
    int arr[] = {10, 20, 20, 20, 30};
    int i, j, n = sizeof(arr) / sizeof(arr[0]);
    int target = 20;

    // Solution 1 time complexity -> O(n^2) space -> O(1)
    /*    for (i = 0; i < n; i++)
       {

           if (arr[i] == target)
           {
               for (j = i + 1; j < n; j++)
               {
                   // shift element in right to the left
                   arr[i] = arr[j];

                   // update i to current value of j
                   i = j;
               }

               // dynamically reduce array size
               n--;
           }
       } */

    // Solution 2: time complexity -> O(n) space -> O(1)
    bool found = false;

    for (i = 0; i < n; i++)
    {
        if (found)
        {
            arr[i - 1] = arr[i];
        }
        else if (arr[i] == target)
        {
            found = true;
        }
    }

    if(found) n--;

    // print new array
    for (i = 0; i < n; i++)
    {
        printf("%d, ", arr[i]);
    }

    return 0;
}
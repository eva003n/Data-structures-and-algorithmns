#include <stdio.h>
#include <stdbool.h>

int main()
{
    int arr[] = {10, 20, 20, 20, 30};

    int i, j = 0, n = sizeof(arr) / sizeof(arr[0]);
    int target = 20;
  
    // Solution 1 time complexity -> O(n) space -> O(1)
    for (i = 0; i < n; i++)
    {
        if (arr[i] != target)
        {
            arr[j] = arr[i];

            j++;
        }
    }
    n = j;

    // Solution 2: time complexity -> O(n) space -> O(1)
    
    // print new array
    for (i = 0; i < n; i++)
    {
        printf("%d, ", arr[i]);
    }

    return 0;
}

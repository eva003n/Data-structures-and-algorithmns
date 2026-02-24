#include <stdio.h>

int main()
{
    int arr[] = {10, 7, 2, 4, 3};
    int n = sizeof(arr) / sizeof(int);
    // two pointers that start at opposite ends of the data structure
    int leftPtr = 0, rightPtr = n - 1;
    int target = 7;
    int results[2];

    // this move will move the pointers to next based on a condition
    for (int i = 0; i < n; i++)
    {
       
        if(leftPtr == rightPtr) {
            leftPtr++;
        }

        if (arr[leftPtr] + arr[rightPtr] == target)
        {
            results[0] = arr[leftPtr];
            results[1] = arr[rightPtr];
            break;
        }

        // next
        leftPtr++;
        rightPtr--;
    }

    // print two numbers that add upto target
    for(int i = 0; i < 2; i++) {
        printf("%d ", results[i]);
    }

    return 0;
}
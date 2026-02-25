#include <stdio.h>

int main()
{
    int arr[] = {2, 3, 4, 7, 10};
    int n = sizeof(arr) / sizeof(int);
    // two pointers that start at opposite ends of the data structure
    int leftPtr = 0, rightPtr = n - 1;
    int target = 7;
    int results[2];
    int sum;

   
    // this move will move the pointers to next based on a condition
    for (int i = 0; i < n; i++)
    {
        sum = arr[leftPtr] + arr[rightPtr];
       
        // if sum is lesser than target increment left pointer to get a sum that is greater than current sum
        if(sum < target) {
            leftPtr++;
        }

        // if sum is greater than target decrement right pointer to get a sum lesser than the current sum
        if(sum > target) {
            rightPtr--;
        }

        // if sum is equal to target return indexes of both the left and right pointer
        if (sum == target)
        {
            results[0] = arr[leftPtr];
            results[1] = arr[rightPtr];
            break;
        }

    }

    // print two numbers that add upto target
    for(int i = 0; i < 2; i++) {
        printf("%d ", results[i]);
    }

    return 0;
}
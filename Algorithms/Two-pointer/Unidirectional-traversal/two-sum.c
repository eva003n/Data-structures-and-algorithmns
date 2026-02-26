#include <stdio.h>

int main()
{
    // int arr[] = {2, 10, 3, 4, 7};
    // int arr[] = {10, 2, 7, 4, 3};
    int arr[] = {4, 2, 7, 10, 3};
    int n = sizeof(arr) / sizeof(int); // length
    int leftPtr = 0, rightPtr = 1, target = 7, sum;
    int result[2];

    while (leftPtr < n)
    {
        sum = arr[leftPtr] + arr[rightPtr];

        // if sum is equal to target exit with indexes
        if (sum == target)
        {
            result[0] = leftPtr;
            result[1] = rightPtr;
            break;
        }

        // controls the implicit inner loop
        if(rightPtr < (n - 1)) {
            rightPtr++;
        }

        // increment left pointer once right pointer points to last element
        // controls outer loop
        if (rightPtr == (n - 1))
        {

            leftPtr++;
            rightPtr = leftPtr + 1;
        }
    }

    // print two numbers that add upto target
    for (int i = 0; i < 2; i++)
    {
        printf("%d ", result[i]);
    }

    return 0;
}
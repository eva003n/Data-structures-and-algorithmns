#include <stdio.h>
#include <stdlib.h>

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{

    int sum;         // hold sum of two elements
    *returnSize = 2; // holds the zize of indices array

    for (int i = 0; i < numsSize - 1; i++)
    {
        // with each iteration we add an element with the rest of the elements and see if it adds up to target
        for (int j = i + 1; j < numsSize; j++)
        {
            // cur + X = target

            // formular -> x = target - cur
            if (j == target - i)
            {
                int *indices = NULL;
                // creates a dynamic array for indices
                indices = malloc((*returnSize) * sizeof(int));

                indices[0] = i;
                indices[1] = j;

                return indices;
            }
        }
    }
    return NULL;
}
int main()
{
    int arr[] = {2, 7, 11, 15};
    int length = sizeof(arr) / sizeof(int);
    int target = 9;
    int returnSize = 2;

    // call the two sum function
    int *indices = twoSum(arr, length, target, &returnSize);

    // perint the solution
    for (int i = 0; i < returnSize; i++)
    {
        for (int j = i + 1; j < returnSize; j++)
        {
            printf("[%d, %d]\n", indices[i], indices[j]);
        }
    }

    // free memory
    free(indices);

    return 0;
}
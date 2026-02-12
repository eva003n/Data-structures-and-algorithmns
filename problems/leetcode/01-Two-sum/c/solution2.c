#include<stdio.h>
#include<stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
    int sum;
    *returnSize = 2;
    int low = 0;
    int high = numsSize;
    int mid = 0;
    int temp;
    int numsCpy[numsSize];

    // sort array in ascenhding order
    for (int i = 0; i < numsSize; i++)
    {
        for(int j = i + 1; j < numsSize - 1; j++){
        // only swap if the rightmost element is greater than leftmost
        if (nums[i] > nums[j])
        {
            // temp = nums[i];
            numsCpy[i] = nums[j]; // second element
            numsCpy[j] = nums[i]; // first element
            // nums[i] = nums[i + 1]; // second element
            // nums[i + 1] = temp;// first element
        }
        else
        {
            // if not then copy to same position
            numsCpy[i] = nums[i];
        }
    }
    }

    // perform two sum
    for (int i = 0; i < numsSize - 1; i++)
    {
        while (low <= high)
        {
            mid = low + (high - low) / 2;
            // sum = numsCpy[i] + numsCpy[mid];

            if (numsCpy[mid] == target - numsCpy[i])
            {
                int *indices = NULL;

                //  indices = malloc(sizeof(*returnSize));
                indices = malloc((*returnSize) * sizeof(int));

                indices[0] = i;
                indices[1] = mid;

                return indices;
            }

            if (sum > target)
            {
                // move down for a lesser number
                high = mid;
            }

            if (sum < target)
            {
                // move up for a larger number
                low = mid;
            }
        }
    }
    return NULL;
}
int main() {
    // int arr[] = {2, 7, 11, 15};
    int arr[] = {3, 2, 4};
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
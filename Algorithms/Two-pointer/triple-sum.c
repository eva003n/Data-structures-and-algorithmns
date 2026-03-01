#include <stdio.h>
#include <stdlib.h>


void sort(int arr[], int);
int main()
{
    int arr[] = {0, -1, 2, -3, 1};
    int n = sizeof(arr) / sizeof(int); // length
    int i, j, k, sum, target = 0;
    int capacity = 2, size = 0;

    sort(arr, n);
    
    for(int i = 0; i < n; i++) {
        printf("%d", arr[i]);
    }

    // hash table
    /* int *triplets = malloc(capacity * sizeof(int));

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            for (k = j + 1; k < n; k++)
            {
                sum = arr[i] + arr[j] + arr[k];

                if (sum == target)
                {

                    if (capacity == size)
                    {
                        capacity *= 2;
                        int *newMemoryBlock = realloc(triplets, capacity * sizeof(int));
                        if (newMemoryBlock != NULL)
                        {
                            triplets = newMemoryBlock;
                        }
                    }

                    int triplet[1][3] = {{arr[i], arr[j], arr[k]}};
                    triplets[size++] = triplet;



                    printf("%d, %d, %d\n", arr[i], arr[j], arr[k]);
                }
            }
        }
    }
 */
    return 0;
}

void sort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                // swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
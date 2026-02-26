#include<stdio.h>
#include<stdlib.h>

int main() {
    int arr[] = {0, -1, 2, -3, 1};
    int n = sizeof(arr) / sizeof(int); // length
    int i, j, k, sum, target = 0;
 

    for(i = 0; i < n; i++) {
        for(j = i + 1; j < n; j++) {
            for(k = j + 1; k < n; k++) {
                sum = arr[i] + arr[j] + arr[k];

                if(sum == target) {
                    printf("%d, %d, %d\n", arr[i], arr[j], arr[k]);
                }

            }
        }
    }

  

    return 0;

}
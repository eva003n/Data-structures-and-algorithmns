#include<stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4};
    int i, n = sizeof(arr) / sizeof(arr[0]);

    for(int i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }

    //dynamically reduce array size
    n--;

    //print new array
    for(i = 0; i < n; i++) {
        printf("%d, ", arr[i]);
    }


    return 0;
}